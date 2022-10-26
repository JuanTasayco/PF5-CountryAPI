import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { PaisMin } from './interfaces/paisesMin.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  urlRest: string = "https://restcountries.com/v3.1"

  getCountriesByName(countryName: string): Observable<PaisMin[] | null> {
    if (!countryName) return of(null);
    return this.http.get<PaisMin[]>(`${this.urlRest}/name/${countryName}?fields=name,cca3,capital,region,population,flags`)
  }

  getCountriesByCapital(capital: string): Observable<PaisMin[] | null> {
    if (!capital) return of(null);
    return this.http.get<PaisMin[]>(`${this.urlRest}/capital/${capital}?fields=name,cca3,capital,region,population,flags`)
  }

  getCountriesByLanguage(language: string): Observable<PaisMin[] | null> {
    if (!language) return of(null);
    return this.http.get<PaisMin[]>(`${this.urlRest}/lang/${language}?fields=name,cca3,capital,region,population,flags`)
  }

  getCountriesByRegion(region: string): Observable<PaisMin[] | null> {
    if (!region) return of(null);
    return this.http.get<PaisMin[]>(`${this.urlRest}/region/${region}?fields=name,cca3,capital,region,population,flags`)
  }

  query(valor: string, parametro: string): Observable<PaisMin[] | null> {
    if (!valor) return of(null)
    return this.http.get<PaisMin[]>(`${this.urlRest}/${parametro}/${valor}?fields=name,cca3,capital,region,population,flags`)
  }

  constructor(private http: HttpClient) { }
}
