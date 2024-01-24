import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    login: '',
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
        this.router.navigateByUrl('/rooms');
      } else {
        this.toaster.error(res);
      }
    });
  }
}
