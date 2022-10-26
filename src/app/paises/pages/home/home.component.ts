import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/shared/nav/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {


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

  constructor() { }

  ngOnInit(): void {
  }




}
