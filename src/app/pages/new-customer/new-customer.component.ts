import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
})
export class NewCustomerComponent implements OnInit {
  customersList: any[] = [];

  constructor(
    private router: Router,
    private roomSrv: RoomService,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.roomSrv.getAllCustomers().then((res: any) => {
      this.customersList = res;
    });
  }
}