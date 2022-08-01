import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Interfaces/producto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { UserService } from 'src/app/servicios/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
 productos:any;
 id_usuario = localStorage.getItem('ACCES_ID');
  id_ticket = localStorage.getItem('TICKET_ID');
  constructor(private service: UserService, private router: Router, private carrito: CarritoService) { }

  ngOnInit(): void {
    this.service.getProductos().subscribe(respuesta=>{

      this.productos = respuesta;
      console.log(this.productos);
     });
   }


   mostrarProd(id:number){

    this.router.navigate(['productos',id]);

   }
   agregarCarrito(id_producto:any,cantidad:any){
    const ticket:any ={
      id_ticket: this.id_ticket,
      id_producto: id_producto,
      cantidad:cantidad
    }
    this.carrito.addcarrito(ticket).subscribe((res)=>{
      Swal.fire({
        title: 'Se agrego el producto al carrito',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
    },(err)=>{
      Swal.fire({
        title: 'error' + err,
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
    })
   }

  }


