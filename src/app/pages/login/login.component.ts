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
  userName!: string;
  password!: string;

  constructor(
    private roomSrv: RoomService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  async onLogin() {
    const token = await this.roomSrv.login(this.userName, this.password);
    if (token) {
      // Store token in local storage
      localStorage.setItem('token', JSON.stringify(token));
      this.toaster.success('You have successfully logged in!');
      // Redirect to protected component
      this.router.navigate(['/newCustomer']);
    } else {
      this.toaster.warning('Wrong credentials!');
    }
  }
}
