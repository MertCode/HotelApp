import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
})
export class BookingListComponent implements OnInit {
  bookingList: any[] = [];

  constructor(private roomSrv: RoomService, private toaster: ToastrService) {}

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() {
    this.roomSrv.getAllBookings().then((res: any) => {
      this.bookingList = res;
    });
  }

  deleteBooking(id: number) {
    this.roomSrv.deleteBooking(id).then((res: any) => {
      if (res) {
        this.toaster.success('Booking deleted successfully');
        this.getBookings();
      } else {
        this.toaster.error(res.message);
      }
    });
  }
}
