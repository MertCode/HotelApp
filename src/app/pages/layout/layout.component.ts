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
  ) {
    const localData = localStorage.getItem('hotelUser');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }
  onLogOff() {
    localStorage.removeItem('hotelUser');
    this.loggedUserData = undefined;
    this.router.navigateByUrl('/login');
  }
}
