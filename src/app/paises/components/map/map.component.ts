import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as mapboxgl from "mapbox-gl";
import { bufferToggle } from 'rxjs';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: []
})
export class MapComponent implements OnInit, OnChanges {

  @Input("lngMap") posicion: any;

  constructor() { }

  mapa!: mapboxgl.Map;

  inicializarMapa() {
    this.mapa = new mapboxgl.Map({
      container: 'MAPA_ID',
      style: 'mapbox://styles/mapbox/light-v10',
      center: this.posicion.reverse(),
      zoom: 3,
      interactive: false
    });

    const marker = new mapboxgl.Marker({
      color: "blue"
    })
      .setLngLat(this.posicion)
      .addTo(this.mapa)
  }

  ngOnInit(): void {
    this.inicializarMapa();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['posicion'].previousValue) {
      this.mapa.remove();
      this.inicializarMapa();
    }

  }






}
