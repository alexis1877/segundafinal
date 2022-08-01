import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './access/account/account.component';
import { LoginComponent } from './access/login/login.component';
import { RecoverComponent } from './access/recover/recover.component';
import { RegisterComponent } from './access/register/register.component';
import { AgregaCarritoComponent } from './carrito/agrega-carrito/agrega-carrito.component';
import { AgregarproductoComponent } from './carrito/agregarproducto/agregarproducto.component';

import { AgregarComponent } from './Components/agregar/agregar.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ModificarComponent } from './Components/modificar/modificar.component';

import { HomeComponent } from './home/home.component';
import { ProductosDetailComponent } from './productos-detail/productos-detail.component';
import { ProductosComponent } from './productos/productos/productos.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'productos/:id',
    component: ProductosDetailComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'recover',
    component: RecoverComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {path: 'inicio', component: InicioComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'modificar/:id', component:ModificarComponent},
  {//AQUI el de agregar
    path:'carrito',
    component: AgregaCarritoComponent
  },
  {
    path:'aproducto',
    component: AgregarproductoComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
