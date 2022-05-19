import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie';

import { environment } from '../../environments/environment';
import { SerieDetail } from './serie-detail';


//TODO 10. Se crea un servicio, en el cual se define un metodo que hace un llamado de las series a partir del apiUrl que se encuentra
@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<SerieDetail[]> {
    return this.http.get<SerieDetail[]>(this.apiUrl);
  }

}
