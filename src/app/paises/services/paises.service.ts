import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Paises } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';

  get params() {
    return new HttpParams()
    .set('fields','capital,flags,name,population,cca3');
  }
  constructor(
    private http: HttpClient
  ) { }

  buscarPais( termino: string ): Observable<Paises[]> {
    const url = `${ this._apiUrl }/name/${ termino }`;
    return this.http.get<Paises[]>( url, { params: this.params } );
  }

  buscarCapital( termino: string ): Observable<Paises[]> {
    const url = `${ this._apiUrl }/capital/${ termino }`;
    return this.http.get<Paises[]>( url, { params: this.params } );
  }

  buscarCodigo( id: string ): Observable<Paises[]> {
    const url = `${ this._apiUrl }/alpha/${ id }`;
    return this.http.get<Paises[]>( url );    
  }

  buscarRegion( region: string ): Observable<Paises[]> {
    const url = `${ this._apiUrl }/region/${ region }`;
    return this.http.get<Paises[]>( url, { params: this.params } );
  }
}
