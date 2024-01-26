import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  loggedUserData: any;

  constructor(
    private router: Router,
    private RoomSrv: RoomService,
    private toaster: ToastrService
  ) {}

  async ngOnInit() {
    this.loggedUserData = JSON.parse(localStorage.getItem('token') as string);
  }

  onLogOff() {
    localStorage.removeItem('token');
    this.loggedUserData = undefined;
    this.router.navigateByUrl('/login');
    this.toaster.success('Logged out successfully');
  }
}
