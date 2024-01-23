import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userList: any[] = [];
  userObj: any = {
    userName: '',
    password: '',
    role: '',
  };

  constructor(
    private roomSrv: RoomService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.roomSrv.getAllUsers().then((res: any) => {
      this.userList = res;
    });
  }

  SaveUser() {
    this.roomSrv.addUser(this.userObj).then((res: any) => {
      if (res) {
        this.getUsers();
        this.toaster.success('User successfully added!');
      } else {
        this.toaster.error(res.message);
      }
    });
  }

  // onEdit(data: any) {
  //   const strObj = JSON.stringify(data);
  //   this.userObj = JSON.parse(strObj);
  // }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete this user?');
    if (isDelete) {
      this.roomSrv.deleteUser(id).then((res: any) => {
        if (res) {
          this.toaster.success('User deleted successfully');
          this.getUsers();
        } else {
          this.toaster.error(res.message);
        }
      });
    }
  }
}
