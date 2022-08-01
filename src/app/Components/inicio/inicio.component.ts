import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Interfaces/producto';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //Variables

  ListarProductos: Producto[] | undefined;

  constructor(private ServiceService: UserService, private router:Router) {}

  ngOnInit(): void {
    this.listarProductos();
  }

  //Lista de productos inicio

  listarProductos() {
    this.ServiceService.getProductos().subscribe(
      (res) => {
        console.log(res);
        this.ListarProductos = <any>res;
      },
      (err) => console.log(err)
    );
  }


  //actualizar producto

  actualizarProducto(id:string) {
    this.router.navigate(['/modificar/' + id]);
  }

  //Eliminar producto

  eliminarProducto(id:string){
    this.ServiceService.eliminarProducto(id).subscribe(
      res => {
        console.log('Producto Eliminado');
        this.listarProductos();
      },
      err => console.log(err)
    );
  }
}
