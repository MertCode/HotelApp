import { Component, OnInit } from '@angular/core';
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

  constructor(private roomSrv: RoomService, private toaster: ToastrService) {}
  ngOnInit(): void {
    this.getUsers();
    this.toaster.success('Customer List', 'Success');

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
        alert('User successfully updated!');
        this.getUsers();
      } else {
        alert(res.message);
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
          alert('User successfully deleted!');
        } else {
          alert(res.message);
        }
      });
    }
  }
}
