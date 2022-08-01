import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarproductoComponent } from './agregarproducto/agregarproducto.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregaCarritoComponent } from './agrega-carrito/agrega-carrito.component';





@NgModule({
  declarations: [
    AgregarproductoComponent,
    AgregaCarritoComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CarritoModule { }
