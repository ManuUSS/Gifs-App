import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsBlockComponent } from './components/gifs-block/gifs-block.component';
import { ResultsComponent } from './components/results/results.component';
import { SearcherComponent } from './components/searcher/searcher.component';



@NgModule({
  declarations: [
    GifsBlockComponent,
    ResultsComponent,
    SearcherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsBlockComponent
  ]
})
export class GifsModule { }
