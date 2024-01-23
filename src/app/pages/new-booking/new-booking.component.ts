import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

interface Booking {
  name: string;
  mobileNo: string;
  email: string;
  nationalIdNumber: string;
  city: string;
  address: string;
  bookingFromDate: string;
  bookingToDate: string;
  bookingRate: number;
  naration: string;
  roomId: number;
}

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css'],
})
export class NewBookingComponent implements OnInit {
  bookingObj: Booking = {
    name: '',
    mobileNo: '',
    email: '',
    nationalIdNumber: '',
    city: '',
    address: '',
    roomId: 0,
    bookingFromDate: '',
    bookingToDate: '',
    bookingRate: 0,
    naration: '',
  };

  guestObj = {
    name: '',
    nationalIdNumber: '',
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
    this.roomSrv.getAllRooms().then((res: any) => {
      this.roomList = res;
    });
  }

  addGuest() {
    const obj = JSON.stringify(this.guestObj);
    const parserobj = JSON.parse(obj);
    //this.bookingObj.hotelBookingDetails.unshift(parserobj);
  }

  removeGuest(index: number) {
    // this.bookingObj.hotelBookingDetails.splice(index, 1);
  }

  createBooking() {
    this.roomSrv
      .createBooking(this.bookingObj)
      .then((res) => {
        if (res.status === 200) {
          this.toaster.success('Booking successfully saved!');
          this.router.navigateByUrl('/bookings');
        } else {
          this.toaster.error(res.statusText);
          console.log(res);
        }
      })
      .catch((error) => {
        console.error('Error creating booking:', error);
        this.toaster.error('An error occurred while saving the booking.');
      });
  }
}
