import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interfaces';
import { PaisMin } from '../../interfaces/paisesMin.interfaces';

@Component({
  selector: 'app-table-pais',
  templateUrl: './table-pais.component.html',
  styleUrls: []
})
export class TablePaisComponent implements OnInit {
  @Input("paisesComponent") paises: PaisMin[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
