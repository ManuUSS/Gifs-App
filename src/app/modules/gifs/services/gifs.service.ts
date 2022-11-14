import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, GifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private _apiKey: string = '4HT5jVebpAgV3XuqxzYxA56q25dTD1bd';
  private _history: string[] = [];

  public gifsResponse: Gif[] = [];
  
  
  get history() {
    
    return [...this._history];
    
  }
  
  constructor( private http:HttpClient ) { }


  public searchGifs = ( query: string ) => {

    if( !query.trim().length ) return;
    
    query = query.trim().toLowerCase();
    
    if( !this._history.includes( query ) ) {
      this._history.unshift ( query );
      this._history = this._history.splice( 0, 10 );
    }

    this.http.get<GifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${ this._apiKey }&q=${ query }&limit=10`)
      .subscribe( ( { data } ) => {
        this.gifsResponse = data;
      }
    );


  }

}
