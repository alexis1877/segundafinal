import { Component, OnInit } from '@angular/core';
import { userlogI } from 'src/app/Interfaces/userlogI';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  bandera: boolean = false;
  admin: boolean = false;
  id_usuario = localStorage.getItem('ACCES_ID');
  id_rol: any | undefined;
  user: userlogI | undefined;
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getAccount();
    this.id_usuario = localStorage.getItem('ACCES_ID');
    if (this.id_usuario) {
      this.bandera = true;
    } else {
      this.bandera = false;
    }
  }
  logOut() {
    this.service.logOut();
  }

  getAccount(): void {
    this.service.getaccount().subscribe(
      (res) => {
        if(res !== null){
        this.user = res;

        this.id_rol = res.id_rol;

        if (this.id_rol == 1) {
          this.admin = true;
        } else {
          this.admin = false;
        }
        // console.log(this.user);
      }
      },
      (err) => console.error(err)
    );
  }
}
