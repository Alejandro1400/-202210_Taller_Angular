import { Component, OnInit } from '@angular/core';
import {Serie} from './serie'
import { DataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie> = [];
  promedioTemporada: number = 0;

  getSeriesList() {
    this.serieService.getSeries().subscribe(series => {
      console.log("series",series)
      this.series = series;
      this.calcularPromedio(this.series);
    })
  }

  ngOnInit() {
    this.getSeriesList();
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
