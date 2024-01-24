import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

interface Room {
  roomId: number;
  roomName: string;
  isAcAvailable: boolean;
  roomCapacity: number;
  isActive: boolean;
  roomTariff: string;
  extensionNo: string;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  roomList: any[] = [];
  roomObj: Room = {
    roomId: 0,
    roomName: '',
    isAcAvailable: false,
    roomCapacity: 0,
    isActive: false,
    roomTariff: '',
    extensionNo: '',
  };
  constructor(
    private roomSrv: RoomService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllRooms();
  }

  getAllRooms() {
    this.roomSrv.getAllRooms().then((res: any) => {
      this.roomList = res;
    });
  }

  AddNewRoom() {
    const obj = {
      roomId: 0,
      roomName: '',
      isAcAvailable: false,
      roomCapacity: 0,
      isActive: false,
      roomTariff: '',
      extensionNo: '',
    };
    this.roomList.push(obj);
  }

  saveRooms() {
    const postObj = this.roomList[this.roomList.length - 1];
    this.roomSrv.updateRoom(postObj).then((res: any) => {
      if (res) {
        this.toaster.success('Room list successfully updated!');
        this.getAllRooms();
      } else {
        this.toaster.error(res.message);
      }
    });
  }

  onDelete(id: number) {
    this.roomSrv.deleteRoom(id).then((res: any) => {
      if (res) {
        this.toaster.success('Room deleted successfully');
        this.getAllRooms();
      } else {
        this.toaster.error(res.message);
      }
    });
  }
}