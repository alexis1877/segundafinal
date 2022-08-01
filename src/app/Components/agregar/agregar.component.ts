import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categoria } from 'src/app/Interfaces/categoria';
import { ProductoaI } from 'src/app/Interfaces/productoaI';

import { subcategoria } from 'src/app/Interfaces/subcategoria';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  producto: ProductoaI = {
    id: '',
    nombre_producto: '',
    precio_producto: '',
    cantidad: '',
    desc: '',
    id_sub_categoria: '',
    url: ''
  };

  listarCategoria: categoria [] | undefined;

  listarSubCategoria: subcategoria [] | undefined;


  constructor(private ServiceService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.consultaCategorias();
    this.consultaSubcategoria();
  }

  agregarProducto() {
    delete this.producto.id;

    this.ServiceService.agregarProducto(this.producto).subscribe();
    this.router.navigate(['/inicio']);
  }

  consultaCategorias() {
      this.ServiceService.getCategoria().subscribe(
        (res) => {
          console.log(res);
          this.listarCategoria = <any>res;
          console.log(this.listarCategoria)
        },
        (err) => console.log(err)
      );
    }

    consultaSubcategoria() {
      this.ServiceService.getSubCategoria().subscribe(
        (res) => {
          console.log(res);
          this.listarSubCategoria = <any>res;
          console.log(this.listarSubCategoria)
        },
        (err) => console.log(err)
      );
    }
}
