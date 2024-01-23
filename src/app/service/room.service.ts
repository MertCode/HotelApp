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
    return this.http.post(this.apiEndPoint2 + 'login', obj);
  }

  getAllRooms() {
    return fetch(this.apiEndPoint2 + 'rooms').then((res) => res.json());
  }

  updateRoom(roomList: any) {
    console.log(JSON.stringify(roomList));

    return fetch(this.apiEndPoint2 + 'rooms/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(roomList),
    });
  }

  deleteRoom(id: any) {
    return fetch(this.apiEndPoint2 + 'rooms/' + id, {
      method: 'DELETE',
    });
  }

  getAllCustomers() {
    return fetch(this.apiEndPoint2 + 'customers').then((res) => res.json());
  }

  getAllUsers() {
    return fetch(this.apiEndPoint2 + 'users').then((res) => res.json());
  }

  addUser(obj: any) {
    return fetch(this.apiEndPoint2 + 'users/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(obj),
    });
  }

  deleteUser(id: any) {
    return fetch(this.apiEndPoint2 + 'users/' + id, {
      method: 'DELETE',
    });
  }

  getAllBookings() {
    return fetch(this.apiEndPoint2 + 'bookings').then((res) => res.json());
  }

  deleteBooking(id: number) {
    return fetch(this.apiEndPoint2 + 'bookings/' + id, {
      method: 'DELETE',
    });
  }

  createBooking(bookingDetails: any) {
    console.log(JSON.stringify(bookingDetails));

    return fetch(this.apiEndPoint2 + 'bookings/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(bookingDetails),
    });
  }
  deleteCustomer(id: number) {
    return fetch(this.apiEndPoint2 + 'customers/' + id, {
      method: 'DELETE',
    });
  }
}
