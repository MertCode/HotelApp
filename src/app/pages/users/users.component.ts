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
  password: string = '';
  showPassword: boolean = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

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
    this.getEmployees();
  }

  getEmployees() {
    this.roomSrv.getAllEmployees().then((res: any) => {
      this.userList = res;
    });
  }

  saveEmployee() {
    this.roomSrv.addEmployee(this.userObj).then((res: any) => {
      if (res) {
        this.getEmployees();
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

  deleteEmployee(id: number) {
    const isDelete = confirm('Are you sure you want to delete this user?');
    if (isDelete) {
      this.roomSrv.deleteEmployee(id).then((res: any) => {
        if (res) {
          this.toaster.success('User deleted successfully');
          this.getEmployees();
        } else {
          this.toaster.error(res.message);
        }
      });
    }
  }
}
