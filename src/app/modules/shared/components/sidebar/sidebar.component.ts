import { Component } from "@angular/core";
import { GifsService } from "src/app/modules/gifs/services/gifs.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  
  constructor( private gifsService:GifsService ) {}

  get history() {
    return this.gifsService.history;
  }

  public searchGif = ( query:string ) => {
    this.gifsService.searchGifs( query );
  }
  
}