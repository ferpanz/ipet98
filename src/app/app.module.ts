import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { TecnicoMaestroMayorDeObrasComponent } from './pages/tecnico-maestro-mayor-de-obras/tecnico-maestro-mayor-de-obras.component';
import { TecnicoIndustriaDelosAlimentosComponent } from './pages/tecnico-industria-delos-alimentos/tecnico-industria-delos-alimentos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CooperadoraEscolarComponent } from './pages/cooperadora-escolar/cooperadora-escolar.component';
import { UnidadTecnicaComponent } from './pages/unidad-tecnica/unidad-tecnica.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstitucionalComponent,
    TecnicoMaestroMayorDeObrasComponent,
    TecnicoIndustriaDelosAlimentosComponent,
    ContactoComponent,
    FooterComponent,
    HeaderComponent,
    CooperadoraEscolarComponent,
    UnidadTecnicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
