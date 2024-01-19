import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customerList: any[] = [];
  constructor(private roomSrv: RoomService, private toaster: ToastrService) {}
  ngOnInit(): void {
    this.getCustomer();
    this.toaster.success('Customer List', 'Success');
  }
  getCustomer() {
    this.roomSrv.getAllCustomers().subscribe((res: any) => {
      this.customerList = res.data;
    });
  }
}
