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
    this.roomSrv.login(this.loginObj).subscribe(
      (res: any) => {
        if (res.result) {
          localStorage.setItem('hotelUser', JSON.stringify(res.data));
          this.router.navigateByUrl('/bookings');
          this.toaster.success('Logged in successfully');
        } else {
          this.toaster.error('Check User Credentials');
        }
      },
      (error: any) => {}
    );
  }
}
