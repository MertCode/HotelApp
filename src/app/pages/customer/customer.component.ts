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
  }
  getCustomer() {
    this.roomSrv.getAllCustomers().then((res: any) => {
      this.customerList = res;
    });
  }
  deleteCustomer(id: number) {
    this.roomSrv.deleteCustomer(id).then((res: any) => {
      if (res) {
        this.toaster.success('Customer deleted successfully');
        this.getCustomer();
      } else {
        this.toaster.error(res.message);
      }
    });
  }
}
