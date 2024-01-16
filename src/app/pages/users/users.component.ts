import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userList: any[] = [];
  userObj: any = {
    userId: 0,
    userName: '',
    password: '',
    role: '',
  };

  constructor(private roomSrv: RoomService) {}
  ngOnInit(): void {
    this.getUsers();
    throw new Error('Method not implemented.');
  }

  getUsers() {
    this.roomSrv.getAllUsers().subscribe((res: any) => {
      this.userList = res.data;
    });
  }

  onSaveUser() {
    this.roomSrv.addUpdateUser(this.userObj).subscribe((res: any) => {
      if (res.result) {
        alert('User successfully created!');
        this.getUsers();
      } else {
        alert(res.message);
      }
    });
  }

  onEdit(data: any) {
    this.userObj = data;
  }
}
