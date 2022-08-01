import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoI } from 'src/app/Interfaces/infoI';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.component.html',
  styleUrls: ['./agregarproducto.component.css']
})
export class AgregarproductoComponent implements OnInit {
  productos: any = [];
  dato: any = [];
  nombre_producto:InfoI|undefined;

  constructor(private carrito:CarritoService, private router: Router) { }

  ngOnInit(): void {

  }
  imprimeprod():any{
    this.carrito.showproductos(1).subscribe(
      res => {
        this.productos = res;
      console.log(res);
    },
    err => console.error(err)
    );
  }


  obtengoidform(form:any){
    this.carrito.obtenerproducto(form.value).subscribe((res)=>{
      console.log(res);
      if(res){
        this.nombre_producto = res;
        console.log(res.nombre_producto);
        console.log(Object.values(this.nombre_producto));
      }
      else{

      }
    })
  }

}
