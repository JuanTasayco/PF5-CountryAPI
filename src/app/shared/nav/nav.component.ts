import { Component, OnInit } from '@angular/core';

export interface Ruta {
  nombre: string,
  ruta: string
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: []
})
export class NavComponent implements OnInit {

  constructor() { }
  rutas: Ruta[] = [
    {
      nombre: "Solo Fronteras",
      ruta: "/paises/fronteras"
    },
    {
      nombre: "Por Pais",
      ruta: "/paises/country"
    },
    {
      nombre: "Por Capital",
      ruta: "/paises/countryCapital"
    },
    {
      nombre: "Por Continente",
      ruta: "/paises/countryRegion"
    },
    {
      nombre: "Por Lenguaje",
      ruta: "/paises/countryLanguage"
    }
  ]

  ngOnInit(): void {
  }

}
