import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'see-progress',
    loadChildren: () => import('./Pages/see-progress/see-progress.module').then( m => m.SeeProgressPageModule)
  },  {
    path: 'menu',
    loadChildren: () => import('./Pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'add-progress',
    loadChildren: () => import('./Pages/add-progress/add-progress.module').then( m => m.AddProgressPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
