import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  constructor() { }

  private _history: string[] = [];

  get history() {
    
    return [...this._history];
  }

  public searchGifs = ( query: string ) => {

    if( !query.trim().length ) return;
    query = query.trim().toLowerCase();
    if( !this._history.includes( query ) ) {
      this._history.unshift ( query );
    }

    this._history = this._history.splice( 0, 10 );
    
  }

}
