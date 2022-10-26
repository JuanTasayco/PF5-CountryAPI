import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { FronterasService } from '../../fronteras.service';
import { Paises } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-country-description',
  templateUrl: './country-description.component.html',
  styleUrls: []
})
export class CountryDescriptionComponent implements OnInit {

  soloPais!: Paises;
  existeUrlErroneo: boolean = false;
  ngOnInit(): void {
    this.existeUrlErroneo = false;
    this.route.params.pipe(switchMap(({ id }) => this.fronterasService.getCountryByCode(id)))
      .subscribe(pais => this.soloPais = pais!,
        () => {
          this.existeUrlErroneo = true;
        })
  }


  constructor(private route: ActivatedRoute,
    private fronterasService: FronterasService) { }
}
