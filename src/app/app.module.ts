import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { PaginaTopComponent } from './pagina-top/pagina-top.component';
import { PaginalosasesinosdelalunaComponent } from './pagina-losasesinosdelaluna/pagina-losasesinosdelaluna.component';
import { PaginaoppenheimerComponent } from './pagina-oppenheimer/pagina-oppenheimer.component';
import { PaginaspaidermancruzandoelmultiversoComponent } from './pagina-spaidermancruzandoelmultiverso/pagina-spaidermancruzandoelmultiverso.component';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    PaginaHomeComponent,
    PaginaTopComponent,
    PaginalosasesinosdelalunaComponent,
    PaginaoppenheimerComponent,
    PaginaspaidermancruzandoelmultiversoComponent,
    PaginaContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }