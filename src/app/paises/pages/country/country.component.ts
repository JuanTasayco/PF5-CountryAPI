import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../country.service';
import { PaisMin } from '../../interfaces/paisesMin.interfaces';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: []
})
export class CountryComponent {

  paises: PaisMin[] = [];
  termino: string = "";
  noHayTermino: boolean = false;

  getValue(pais: string) {
    this.termino = pais;
    this.noHayTermino = false;
    this.countryService.getCountriesByName(pais)
      .subscribe(paises => this.paises = paises!,
        () => {
          this.noHayTermino = true
          this.paises = [];
        })

  }

  constructor(private countryService: CountryService) { }
}
