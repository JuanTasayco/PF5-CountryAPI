import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../country.service';
import { PaisMin } from '../../interfaces/paisesMin.interfaces';

@Component({
  selector: 'app-country-region',
  templateUrl: './country-region.component.html',
  styleUrls: []
})
export class CountryRegionComponent {
  paises: PaisMin[] = [];
  termino: string = "";
  noHayTermino: boolean = false;


  getValue(region: string) {
    this.termino = region;
    this.noHayTermino = false;
    this.countryService.getCountriesByRegion(region)
      .subscribe(paises => this.paises = paises!,
        () => {
          this.noHayTermino = true
          this.paises = [];
        })
  }

  constructor(private countryService: CountryService) { }
}
