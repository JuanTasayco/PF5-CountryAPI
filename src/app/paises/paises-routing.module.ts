import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FronterasComponent } from './pages/fronteras/fronteras.component';
import { CountryCapitalComponent } from './pages/country-capital/country-capital.component';
import { CountryComponent } from './pages/country/country.component';
import { CountryLanguageComponent } from './pages/country-language/country-language.component';
import { CountryRegionComponent } from './pages/country-region/country-region.component';
import { CountryDescriptionComponent } from './pages/country-description/country-description.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
  children: [
    { path: "fronteras", component: FronterasComponent },
    { path: "country", component: CountryComponent },
    { path: "countryCapital", component: CountryCapitalComponent },
    { path: "countryLanguage", component: CountryLanguageComponent },
    { path: "countryRegion", component: CountryRegionComponent },
    { path: ":id", component: CountryDescriptionComponent, pathMatch: "full" },
    { path: "**", redirectTo: "fronteras" }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
