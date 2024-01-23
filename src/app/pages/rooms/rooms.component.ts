import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  roomList: any[] = [];
  roomObj: any = {
    roomId: 0,
    roomName: '',
    isAcAvailable: false,
    roomCapacity: 0,
    isActive: false,
    roomTariff: 0,
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
      roomTariff: 0,
      extensionNo: '',
    };
    this.roomList.push(obj);
    console.log(this.roomList[this.roomList.length - 1]);
  }

  saveRooms() {
    console.log('save: ' + this.roomList[this.roomList.length - 1]);
    const postObj = this.roomList[this.roomList.length - 1];
    // json stringify
    console.log(JSON.stringify(postObj));
    this.roomSrv.updateRoom(postObj).then((res: any) => {
      if (res.result) {
        this.toaster.success('Room list successfully updated!');
        this.getAllRooms();
      } else {
        this.toaster.error(res.message);
      }
    });
  }

  onDelete(id: number) {
    this.roomSrv.deleteRoom(id).subscribe((res: any) => {
      if (res.result) {
        this.toaster.success('Room successfully deleted!');
        this.getAllRooms();
      } else {
        this.toaster.error(res.message);
      }
    });
  }
}
