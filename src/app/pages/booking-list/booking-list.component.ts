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
    this.roomSrv.getAllBookings().subscribe((res: any) => {
      this.bookingList = res.data;
    });
  }
}
