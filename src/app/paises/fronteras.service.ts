import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, map, Observable, of, tap } from 'rxjs';
import { Borders, NameBorder } from './interfaces/borders.interfaces';
import { Paises } from './interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FronterasService {

  regiones: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  urlRest: string = "https://restcountries.com/v3.1"

  getContinent(continente: string): Observable<Paises[] | null> {
    if (!continente) return of(null);
    return this.http.get<Paises[]>(`${this.urlRest}/region/${continente}`);
  }

  getFrontersByPaisCode(codigoPais: string): Observable<Borders | null | any> {
    if (!codigoPais) return of(null);
    return this.http.get<Borders>(`${this.urlRest}/alpha/${codigoPais}?fields=name,capital,borders`)
      .pipe(map(resp => resp.borders));
  }

  getCountryByCode(codigoPais: string): Observable<Paises | null> {
    if (!codigoPais) return of(null)
    return this.http.get<Paises[]>(`${this.urlRest}/alpha/${codigoPais}`)
      .pipe(map(resp => resp[0]))
  }

  getNameBordersByCode(borders: string[]): Observable<NameBorder[]> {
    if (!borders) return of([]);

    const arrayObservablesBorder: Observable<NameBorder>[] = []
    borders.forEach(border => {
      arrayObservablesBorder.push(this.http.get<NameBorder>(`${this.urlRest}/alpha/${border}?fields=name,cca3`))
    })

    return forkJoin(arrayObservablesBorder)

  }

  constructor(private http: HttpClient) { }
}
