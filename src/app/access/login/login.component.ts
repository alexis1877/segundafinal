import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  correcto: boolean = false;
  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(form: NgForm): void {

    this.service.login(form.value).subscribe((res) => {
      if (res) {
        this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() => {

          this.router.navigate(['/home']);

        });
      } else {
        Swal.fire({
          title: 'Datos incorrectos',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
      }
    });
  }
}
