import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { CriarPalpiteComponent } from './pages/criar-palpite/criar-palpite.component';
import { LoginComponent } from './pages/login/login.component';
import { MeusPalpitesComponent } from './pages/meus-palpites/meus-palpites.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'criar-palpite',
    component: CriarPalpiteComponent
  },
  {
    path: 'meus-palpites',
    component: MeusPalpitesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
