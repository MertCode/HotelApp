import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
roomList: any;

  constructor(private roomSrv: RoomService) {}

  ngOnInit(): void {
    this.getAllRooms();
    throw new Error('Method not implemented.');
  }

  getAllRooms (){
    this.roomSrv.getAllRooms().subscribe((res:any)=>{
      this.roomList = res.data;
    })
  }
}
