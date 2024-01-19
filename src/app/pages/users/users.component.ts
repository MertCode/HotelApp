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
    userId: 0,
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
        this.toaster.success('Employee list successfully updated!');
        this.getUsers();
      } else {
        this.toaster.error(res.message);
      }
    });
  }

  onEdit(data: any) {
    const strObj = JSON.stringify(data);
    this.userObj = JSON.parse(strObj);
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete this user?');
    if (isDelete) {
      this.roomSrv.deleteUser(id).subscribe((res: any) => {
        if (res.result) {
          this.getUsers();
          this.toaster.success('User successfully deleted!');
        } else {
          this.toaster.error(res.message);
        }
      });
    }
  }
}
