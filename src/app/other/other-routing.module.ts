import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFound404Component } from './not-found404/not-found404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notFound',
    pathMatch: 'full'
  },
  {
    path: 'notFound', 
    component: NotFound404Component
  },
  {
    path: '**', 
    redirectTo: 'notFound',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [NotFound404Component],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
