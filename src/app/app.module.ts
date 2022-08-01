import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { AccessModule } from './access/access.module';
import { ProductosModule } from './productos/productos.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductosDetailComponent } from './productos-detail/productos-detail.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AgregarComponent } from './Components/agregar/agregar.component';
import { ModificarComponent } from './Components/modificar/modificar.component';
import { FormsModule } from '@angular/forms';
import { CarritoModule } from './carrito/carrito.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductosDetailComponent,
    InicioComponent,
    AgregarComponent,
    ModificarComponent,



  ],
  imports: [
    BrowserModule,
    CarritoModule,
    AppRoutingModule,
    AccessModule,
    ProductosModule,
    HttpClientModule,

    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
