import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { Borders, NameBorder } from '../../interfaces/borders.interfaces';
import { Paises } from '../../interfaces/paises.interfaces';
import { FronterasService } from '../../fronteras.service';

@Component({
  selector: 'app-paises',
  templateUrl: './fronteras.component.html',
  styleUrls: []
})
export class FronterasComponent implements OnInit {

  formulario: FormGroup = this.fb.group({
    continente: ["", Validators.required],
    pais: ["", Validators.required],
    fronteras: ["", Validators.required]
  })

  paises: Paises[] = [];
  paisBorder: NameBorder[] = [];
  soloPais!: Paises;

  ngOnInit(): void {

    this.formulario.get("continente")?.valueChanges
      .pipe(tap(() => this.formulario.get("pais")?.reset("")),
        switchMap(continente => this.frontService.getContinent(continente.toLowerCase())))
      .subscribe(paises => this.paises = paises!)

    this.formulario.get("pais")?.valueChanges
      .pipe(tap(() => this.formulario.get("fronteras")?.reset("")),
        switchMap(codePais => this.frontService.getFrontersByPaisCode(codePais)),
        switchMap(borders => this.frontService.getNameBordersByCode(borders)))
      .subscribe(nameBorders => this.paisBorder = nameBorders)


    this.formulario.get("fronteras")?.valueChanges
      .pipe(switchMap(code => this.frontService.getCountryByCode(code)))
      .subscribe(country => this.soloPais = country!)
  }


  get getRegiones() {
    return this.frontService.regiones;
  }



  constructor(private frontService: FronterasService,
    private fb: FormBuilder) { }
}
