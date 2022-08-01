import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/Interfaces/producto';
import { ProductoaI } from 'src/app/Interfaces/productoaI';
import { subcategoria } from 'src/app/Interfaces/subcategoria';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  producto: ProductoaI = {
    id: '',
    nombre_producto: '',
    precio_producto: '',
    cantidad: '',
    desc: '',
    id_sub_categoria: '',
    url: '',
  };

  listarSubCategoria: subcategoria[] | undefined;

  constructor(
    private ServiceService: UserService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id_entrada = <string>this.activeRouter.snapshot.params['id'];
    console.log('id de entrada: ' + id_entrada);
    this.consultaSubcategoria();
    if (id_entrada) {
      this.ServiceService.getProductosIdentificador(id_entrada).subscribe(
        (res: any) => {
          this.producto = res;
          console.log(res);
        },
        (err) => console.log(err)
      );
    }
  }

  modificar() {
    this.ServiceService.actualizarProducto(
      this.producto.id!,
      this.producto
    ).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );

    this.router.navigate(['/inicio']);
  }

  consultaSubcategoria() {
    this.ServiceService.getSubCategoria().subscribe(
      (res) => {
        console.log(res);
        this.listarSubCategoria = <any>res;
        console.log(this.listarSubCategoria);
      },
      (err) => console.log(err)
    );
  }
}
