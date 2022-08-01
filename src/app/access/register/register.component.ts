import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {}
  onRegister(form: NgForm): void {
    console.log(form.value);
    this.service.createUser(form.value).subscribe(
      (res) => {
        if (res) {
          Swal.fire({
            title: 'Ahora estas registrado, ingresa tus datos para acceder',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          });
          this.router.navigateByUrl('login');
          console.log('Usuario Creado');
        }
      },
      (err) => {
        Swal.fire({
          title: err,
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
      }
    );
  }
}
