import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TecnicoIndustriaDelosAlimentosComponent } from './pages/tecnico-industria-delos-alimentos/tecnico-industria-delos-alimentos.component';
import { TecnicoMaestroMayorDeObrasComponent } from './pages/tecnico-maestro-mayor-de-obras/tecnico-maestro-mayor-de-obras.component';
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { CooperadoraEscolarComponent } from './pages/cooperadora-escolar/cooperadora-escolar.component';
import { UnidadTecnicaComponent } from './pages/unidad-tecnica/unidad-tecnica.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  },
  {
    path:"alimentos",
    component: TecnicoIndustriaDelosAlimentosComponent
  },
  {
    path:"obra",
    component:TecnicoMaestroMayorDeObrasComponent
  },
  {
    path:"institucional",
    component:InstitucionalComponent
  },
  {
    path:"cooperadora",
    component:CooperadoraEscolarComponent
  },
  {
    path:"talleres",
    component:UnidadTecnicaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
