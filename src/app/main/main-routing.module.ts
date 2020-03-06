import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list', 
    loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  { 
    path: 'auth', 
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'profile', 
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
  },
  { 
    path: 'notify', 
    loadChildren: () => import('../notify/notify.module').then(m => m.NotifyModule)
  },
  { 
    path: 'payment', 
    loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: '**', 
    redirectTo: '/other/notFound',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
