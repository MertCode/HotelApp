import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css'],
})
export class BookingCalendarComponent implements OnInit {
  selectedDate: Date = new Date();
  dayInMonthList: number[] = [];
  allRooms: any[] = [];
  bookingList: any[] = [];

  constructor(private roomSrv: RoomService) {}
  ngOnInit(): void {}
}
