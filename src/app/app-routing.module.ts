import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tool',
    pathMatch: 'full'
  },
  {
    path: 'tool',
    loadChildren: './views/ferramenta/ferramenta.module#FerramentaModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
