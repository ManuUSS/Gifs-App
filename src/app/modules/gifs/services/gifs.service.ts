import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private _apiKey: string = '4HT5jVebpAgV3XuqxzYxA56q25dTD1bd'; 
  private _urlApi: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];

  public gifsResponse: Gif[] = [];
  
  
  get history() {
    
    return [...this._history];
    
  }
  
  constructor( private http:HttpClient ) { 

    if ( localStorage.getItem('history') ) {
      this._history = JSON.parse( localStorage.getItem('history')! );
      this.gifsResponse = JSON.parse( localStorage.getItem('gifsResponse')! );
    }

  }

  public searchGifs = ( query: string ) => {

    if( !query.trim().length ) return;
    
    query = query.trim().toLowerCase();
    
    if( !this._history.includes( query ) ) {
      this._history.unshift ( query );
      this._history = this._history.splice( 0, 10 );
      localStorage.setItem( 'history', JSON.stringify( this._history ) );
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<GifsResponse>(`${ this._urlApi }/search`, { params })
      .subscribe( ( { data } ) => {
        this.gifsResponse = data;
        localStorage.setItem( 'gifsResponse', JSON.stringify( this.gifsResponse ) );
      }
    );

  }

}
