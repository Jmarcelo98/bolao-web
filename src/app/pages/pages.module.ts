import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CriarPalpiteComponent } from './criar-palpite/criar-palpite.component';
import { MeusPalpitesComponent } from './meus-palpites/meus-palpites.component';



@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    CriarPalpiteComponent,
    MeusPalpitesComponent
  ],
  imports: [
    CommonModule
  ]
})

export class PagesModule { }
