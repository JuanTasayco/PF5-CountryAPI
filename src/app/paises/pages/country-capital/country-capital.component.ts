import { Component } from '@angular/core';
import { CountryService } from '../../country.service';
import { PaisMin } from '../../interfaces/paisesMin.interfaces';

@Component({
  selector: 'app-country-capital',
  templateUrl: './country-capital.component.html',
  styleUrls: []
})
export class CountryCapitalComponent {
  paises: PaisMin[] = [];
  termino: string = "";
  noHayTermino: boolean = false;

  getValue(capital: string) {
    this.termino = capital;
    this.noHayTermino = false;
    this.countryService.getCountriesByCapital(capital)
      .subscribe(paises => this.paises = paises!,
        () => {
          this.noHayTermino = true
          this.paises = [];
        })
  }

  constructor(private countryService: CountryService) { }

}