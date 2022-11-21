import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { CriarPalpiteComponent } from './criar-palpite/criar-palpite.component';
import { MeusPalpitesComponent } from './meus-palpites/meus-palpites.component';
import { AdicionarConfrontoComponent } from './adicionar-confronto/adicionar-confronto.component';



@NgModule({
  declarations: [
    AdminComponent,
    CriarPalpiteComponent,
    MeusPalpitesComponent,
    AdicionarConfrontoComponent
  ],
  imports: [
    CommonModule
  ]
})

export class PagesModule { }
