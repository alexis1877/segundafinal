import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { userI } from '../Interfaces/userI';
import { userlogI } from '../Interfaces/userlogI';
import { correoI } from '../Interfaces/correoI';
import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  buscador = '';
  URL = 'http://localhost:4000/';
  constructor(private http: HttpClient) {}

  login(usuario: any,): Observable<any> {

    return this.http.post<any>(this.URL + 'login', usuario).pipe(
      tap((res: userI) => {
        if (res) {
          this.saveUsuario(res.id_usuario);
          this.crearTicket(res.id_usuario);

        }
      })
    );
  }

  createUser(usuario: any): Observable<any> {
    return this.http
      .post<any>(this.URL + 'usuario/registrarUsuario', usuario)
      .pipe(
        tap((res: any) => {
          if (res) {
            console.log('Usuario Creado');
          }
        })
      );
  }

  crearTicket(id_usuario:any){
    const id = {
      id: id_usuario,
      // ACCES_ID: userid
    };
    return this.http.post(this.URL + 'generaticket', id).subscribe((res)=>{
      console.log("Entraste el numero es" + res);

     this.saveTicket(res);
    })
  }

  getId() {
    return this.buscador;
  }

  logOut() {
    localStorage.clear();
  }
  //recuperar contraseña
  recoverEmail(correo: any): Observable<correoI> {
    return this.http.post<correoI>(this.URL + 'usuario/recuperar', correo);
  }
  getaccount(): Observable<userlogI> {
    //console.log('función inn');
    const iduser = {
      id_usuario: localStorage.getItem('ACCES_ID'),
      // ACCES_ID: userid
    };

    return this.http.post<userlogI>(this.URL + 'usuario/getUsuario', iduser);
  }

  //guardar id de usuario
  private saveUsuario(userId: number): void {
    const str = String(userId);
    localStorage.setItem('ACCES_ID', str);
  }
  private saveTicket(ticketId: any): void {
    const str = String(ticketId);
    localStorage.setItem('TICKET_ID', str);
  }

  updateUser(usuario: any): Observable<any> {
    return this.http
      .post<any>(this.URL + 'usuario/update', usuario)
      .pipe(
        tap((res: any) => {
          if (res) {
            console.log('Usuario modificado');
          }
        })
      );
  }

  deleteUser(): Observable<any>{
    const iduser = {
      id: localStorage.getItem('ACCES_ID'),
          };
    return this.http.post<any>(this.URL + 'usuario/borrar', iduser).pipe(tap((res:any)=>{
      if(res){
        console.log(res);
    }
    }))

  }



  //Inicia Productos Jhonatan

  //Muestra todos los productos

  getProductos(){
    return this.http.get<any>(this.URL + 'productos');
  }

  //Muestra un producto

  getProductosIdentificador(id: string): Observable<Producto> {
    return this.http.get<Producto>(this.URL + 'productos/' + id)
  }

  //Agrega un producto

  agregarProducto(producto: Producto) {
    return this.http.post(this.URL + 'productos/crear', producto);
  }

  //Actualizar producto

  actualizarProducto(id: string, producto: Producto): Observable<any> {
   return this.http.put<any>(this.URL + 'productos/actualizar/' + id, producto);
  }

  //Borra un producto

  eliminarProducto(id: string) {
    return this.http.delete(this.URL + 'productos/eliminar/' + id);
  }


  getCategoria(): Observable<any>{
    return this.http.get<any>(this.URL + 'categorias');
  }

  //SubCategoria

  getSubCategoria(){
    return this.http.get(this.URL + 'subcategorias');
  }

  //Termina Productos Jhonatan
}
