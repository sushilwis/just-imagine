import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  { 
    path: 'main', 
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { 
    path: 'other', 
    loadChildren: () => import('./other/other.module').then(m => m.OtherModule)
  },
  {
    path: '**', 
    redirectTo: 'other',
    pathMatch: 'full'
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
