import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarConfrontoComponent } from './pages/adicionar-confronto/adicionar-confronto.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CriarPalpiteComponent } from './pages/criar-palpite/criar-palpite.component';
import { MeusPalpitesComponent } from './pages/meus-palpites/meus-palpites.component';

const routes: Routes = [
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
  }, 
  {
    path: 'adicionar-confroto',
    component: AdicionarConfrontoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
