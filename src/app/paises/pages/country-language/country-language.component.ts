import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../country.service';
import { PaisMin } from '../../interfaces/paisesMin.interfaces';

@Component({
  selector: 'app-country-language',
  templateUrl: './country-language.component.html',
  styleUrls: []
})
export class CountryLanguageComponent {
  paises: PaisMin[] = [];
  termino: string = "";
  noHayTermino: boolean = false;

  getValue(language: string) {
    this.termino = language;
    this.noHayTermino = false;
    this.countryService.getCountriesByLanguage(language)
      .subscribe(paises => this.paises = paises!,
        () => {
          this.noHayTermino = true
          this.paises = [];
        })
  }

  constructor(private countryService: CountryService) { }
}
