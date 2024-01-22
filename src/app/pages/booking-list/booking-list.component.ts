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

  RemoveBooking(id: number) {
    this.roomSrv.deleteBooking(id).subscribe((res: any) => {
      if (res.result) {
        this.toaster.success('Room successfully deleted!');
        this.getBookings();
      } else {
        this.toaster.error(res.message);
      }
    });
  }
}
