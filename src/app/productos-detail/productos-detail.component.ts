import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../Interfaces/producto';
import { UserService } from '../servicios/user.service';
@Component({
  selector: 'app-productos-detail',
  templateUrl: './productos-detail.component.html',
  styleUrls: ['./productos-detail.component.css']
})
export class ProductosDetailComponent implements OnInit {
id:string = "";
lista:Producto = {};
  constructor(private ruta:ActivatedRoute, private service:UserService) {


    this.id = String(this.ruta.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.obtenerProducto(this.id);

    //console.log(this.lista);
    //console.log(this.service.getProductosIdentificador(this.id));


   }

  ngOnInit(): void {

  }


 obtenerProducto(id:string){
  this.service.getProductosIdentificador(id).subscribe((res)=>{
    this.lista = res;
   console.log(this.lista);

  });
 }
}
