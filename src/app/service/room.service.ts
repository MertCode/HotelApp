import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  apiEndPoint1: string =
    'https://freeapi.miniprojectideas.com/api/HotelBooking/';
  apiEndPoint2: string = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  login(obj: any) {
    return this.http.post(this.apiEndPoint1 + 'Login', obj);
  }

  getAllRooms() {
    //return this.http.get(this.apiEndPoint2 + 'rooms');
    return fetch(this.apiEndPoint2 + 'rooms').then((res) => res.json());
  }

  GetBookingsByMonth(month: number) {
    return this.http.get(
      this.apiEndPoint1 + 'GetBookingsByMonth?month=' + month
    );
  }

  saveUpdateRoom(obj: any) {
    return this.http.post(this.apiEndPoint1 + 'AddUpdateBulkRooms', obj);
  }

  deleteRoom(id: any) {
    return this.http.delete(
      this.apiEndPoint1 + 'DeleteRoomByRoomId?roomId=' + id
    );
  }

  getAllCustomers() {
    return this.http.get(this.apiEndPoint2 + 'customers');
  }
  getAllUsers() {
    return this.http.get(this.apiEndPoint2 + 'users');
  }
  addUpdateUser(obj: any) {
    return this.http.post(this.apiEndPoint1 + 'AddUpdateUser', obj);
  }
  deleteUser(id: any) {
    return this.http.delete(
      this.apiEndPoint1 + 'DeleteUserByUserId?userId=' + id
    );
  }

  createBooking(obj: any) {
    return this.http.post(this.apiEndPoint1 + 'bookroom', obj);
  }

  getAllBookings() {
    return this.http.get(this.apiEndPoint2 + 'bookings');
  }
}
