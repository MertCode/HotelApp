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

  // saveUpdateRoom(obj: any) {
  //   return this.http.post(this.apiEndPoint2 + 'rooms', obj);
  // }

  updateRoom(roomList: any) {
    console.log(JSON.stringify(roomList));

    return fetch('http://localhost:8000/api/rooms', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(roomList),
    });
  }

  deleteRoom(id: any) {
    return fetch('http://localhost:8000/api/rooms/' + id, {
      method: 'DELETE',
    });
  }

  getAllCustomers() {
    return fetch(this.apiEndPoint2 + 'customers').then((res) => res.json());
  }
  getAllUsers() {
    return fetch(this.apiEndPoint2 + 'users').then((res) => res.json());
  }
  addUpdateUser(obj: any) {
    return this.http.post(this.apiEndPoint1 + 'AddUpdateUser', obj);
  }

  deleteUser(id: any) {
    return this.http.delete(
      this.apiEndPoint1 + 'DeleteUserByUserId?userId=' + id
    );
  }

  // createBooking(obj: any) {
  //   return this.http.post(this.apiEndPoint1 + 'bookroom', obj);
  // }

  getAllBookings() {
    return fetch(this.apiEndPoint2 + 'bookings').then((res) => res.json());
  }

  deleteBooking(id: number) {
    return fetch('http://localhost:8000/api/bookings/' + id, {
      method: 'DELETE',
    });
  }

  createBooking(bookingDetails: any) {
    console.log(JSON.stringify(bookingDetails));

    return fetch('http://localhost:8000/api/bookings', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(bookingDetails),
    });
  }
  deleteCustomer(id: number) {
    return fetch('http://localhost:8000/api/customers/' + id, {
      method: 'DELETE',
    });
  }
}
