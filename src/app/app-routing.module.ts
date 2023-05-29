import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';

const routes: Routes = [
  { path: '', component: ListaPersonajesComponent },
  { path: 'personajes', component: ListaPersonajesComponent },
  { path: '**', redirectTo: 'lista-personajes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
