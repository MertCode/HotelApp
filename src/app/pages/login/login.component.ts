import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

interface Login {
  userName: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: Login = {
    userName: '',
    password: '',
  };
  constructor(
    private roomSrv: RoomService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  onLogin() {
    this.roomSrv.login(this.loginObj).then((res) => {
      if (res) {
        this.toaster.success('Login successful!');
        this.router.navigateByUrl('/bookings');
      } else {
        this.toaster.error(res);
      }
    });
  }
}