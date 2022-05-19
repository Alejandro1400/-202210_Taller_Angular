import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieDetail } from '../serie-detail';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<SerieDetail> = [];
  promedioTemporada: number = 0;
  selected: Boolean = false;
  selectedSerie!: SerieDetail;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.calcularPromedio(this.series);
    });
  }


  onSelected(serie: SerieDetail):void{
    this.selected = true;
    this.selectedSerie = serie;
  }


  ngOnInit() {
    this.getSeries();
  }

  calcularPromedio(series: Array<Serie>){
    let sumaTemporadas: number = 0;
    series.forEach(serie =>
      {
      sumaTemporadas += serie.seasons;
      }
    )
    this.promedioTemporada = sumaTemporadas/series.length;

  }

}
