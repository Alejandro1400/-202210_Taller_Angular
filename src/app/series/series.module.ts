//TODO 1. Se crea un modulo, haciendo uso de Generate Module y se especifica el nombre
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieListComponent, SerieDetailComponent],

  //TODO 4. Se exporta el componente
  exports: [SerieListComponent]
})
export class SeriesModule { }
