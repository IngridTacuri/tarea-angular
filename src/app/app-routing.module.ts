import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegacionComponent } from './navegacion/navegacion.component';

const routes: Routes = [
  { path: 'navegacion', redirectTo: '/navegacion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
