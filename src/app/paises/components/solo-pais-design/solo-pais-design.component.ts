import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-solo-pais-design',
  templateUrl: './solo-pais-design.component.html',
  styleUrls: []
})
export class SoloPaisDesignComponent {
  @Input("paisComponent") country!: Paises;
  constructor() { }
}
