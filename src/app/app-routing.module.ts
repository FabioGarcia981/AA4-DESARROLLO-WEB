import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { PaginaTopComponent } from './pagina-top/pagina-top.component';
import { PaginalosasesinosdelalunaComponent } from './pagina-losasesinosdelaluna/pagina-losasesinosdelaluna.component';
import { PaginaoppenheimerComponent } from './pagina-oppenheimer/pagina-oppenheimer.component';
import { PaginaspaidermancruzandoelmultiversoComponent } from './pagina-spaidermancruzandoelmultiverso/pagina-spaidermancruzandoelmultiverso.component';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';

const routes: Routes = [
	{ path: '', component: PaginaPrincipalComponent },
	{ path: 'home', component: PaginaHomeComponent },
	{ path: 'top', component: PaginaTopComponent },
	{ path: 'losasesinosdelaluna', component: PaginalosasesinosdelalunaComponent },
	{ path: 'oppenheimer', component: PaginaoppenheimerComponent },
	{ path: 'spaidermancruzandoelmultiverso', component: PaginaspaidermancruzandoelmultiversoComponent },
	{ path: 'contacto', component: PaginaContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
		   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }