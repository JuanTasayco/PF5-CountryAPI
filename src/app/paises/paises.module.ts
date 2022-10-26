import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PaisesRoutingModule } from './paises-routing.module';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';

import { FronterasComponent } from './pages/fronteras/fronteras.component';
import { HomeComponent } from './pages/home/home.component';
import { SoloPaisDesignComponent } from './components/solo-pais-design/solo-pais-design.component';
import { TablePaisComponent } from './components/table-pais/table-pais.component';
import { ValoresObjetosPipe } from './pipes/valores-objetos.pipe';
import { SearchComponent } from './components/search/search.component';
import { CountryCapitalComponent } from './pages/country-capital/country-capital.component';
import { CountryLanguageComponent } from './pages/country-language/country-language.component';
import { CountryComponent } from './pages/country/country.component';
import { CountryRegionComponent } from './pages/country-region/country-region.component';
import { CountryDescriptionComponent } from './pages/country-description/country-description.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    FronterasComponent,
    HomeComponent,
    SoloPaisDesignComponent,
    TablePaisComponent,
    ValoresObjetosPipe,
    SearchComponent,
    CountryCapitalComponent,
    CountryLanguageComponent,
    CountryComponent,
    CountryRegionComponent,
    CountryDescriptionComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgPrimeModule,
  ]
})
export class PaisesModule { }
