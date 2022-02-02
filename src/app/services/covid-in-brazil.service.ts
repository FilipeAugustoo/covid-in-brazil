import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidInBrazilService {

  private url = 'https://covid19.mathdro.id/api/countries/BR';

  private urlGlobal = 'https://covid19.mathdro.id/api'

  constructor(private http: HttpClient) { }

  public buscaDados() {
    return this.http.get<Array<any>>(this.url);
  }

  public buscaDadosGlobal() {
    return this.http.get<Array<any>>(this.urlGlobal);
  }
}
