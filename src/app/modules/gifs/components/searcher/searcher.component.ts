import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
})
export class SearcherComponent  {

  constructor( private gifsService: GifsService ) { }

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  public search = () => {
    const value = this.txtSearch.nativeElement.value;
    this.gifsService.searchGifs( value );
    this.txtSearch.nativeElement.value = '';
  }
}
