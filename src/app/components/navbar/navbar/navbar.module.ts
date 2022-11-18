import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AdminComponent } from '../admin/admin.component';

import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    NavbarComponent,
    AdminComponent
  ],
  exports: [
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class NavbarModule { }
