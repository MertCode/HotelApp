import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

interface Customer {
  name: string;
  mobileNo: string;
  email: string;
  nationalIdNumber: string;
  city: string;
  address: string;
  
}

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
})
export class NewCustomerComponent implements OnInit {
  customersList: any[] = [];
  customerObj: Customer = {
    name: '',
    mobileNo: '',
    email: '',
    nationalIdNumber: '',
    city: '',
    address: '',
  };

  constructor(
    private router: Router,
    private roomSrv: RoomService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}
  
createCustomer() {
  this.roomSrv
    .createNewCustomer(this.customerObj)
    .then((res) => {
      this.toaster.success('Customer Created Successfully');
      this.router.navigate(['/customer']);
    })
    .catch((err) => {
      console.log(err);
    })

}
}