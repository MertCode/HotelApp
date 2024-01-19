import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css'],
})
export class NewBookingComponent implements OnInit {
  bookingObj: any = {
    name: '',
    mobileNo: '',
    email: '',
    aadharNo: '',
    city: '',
    address: '',
    bookingId: 0,
    roomId: 0,
    customerId: 0,
    bookingFromDate: '',
    bookingToDate: '',
    createdDate: new Date(),
    bookingRate: 0,
    naration: '',
    createdBy: '1',
    hotelBookingDetails: [],
  };

  guestObj: any = {
    bookingDetailId: 0,
    bookingId: 0,
    customerName: '',
    aadharCardNo: '',
  };

  roomList: any[] = [];

  constructor(
    private roomSrv: RoomService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms() {
    this.roomSrv.getAllRooms().subscribe((res: any) => {
      this.roomList = res.data;
    });
  }

  addGuest() {
    const obj = JSON.stringify(this.guestObj);
    const parseObj = JSON.parse(obj);
    this.bookingObj.hotelBookingDetails.unshift(parseObj);
  }
  removeGuest(index: number) {
    this.bookingObj.hotelBookingDetails.splice(index, 1);
  }

  onSaveBooking() {
    this.roomSrv.createBooking(this.bookingObj).subscribe((res: any) => {
      if (res.result) {
        this.toaster.success('Customer List', 'Success');
        this.router.navigate(['/booking-calendar']);
      } else {
        alert(res.message);
        console.log(res);
      }
    });
  }
}
