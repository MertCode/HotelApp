import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  apiUrl: string = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  async login(username: string, password: string) {
    let users = await this.getAllEmployees();

    let user = users.find(
      (u: { userName: string; password: string }) => u.userName === username
    );

    if (user.password === password) {
      return user;
    }
  }

  getAllRooms() {
    return fetch(this.apiUrl + 'rooms').then((res) => res.json());
  }

  updateRoom(roomList: any) {
    console.log(JSON.stringify(roomList));

    return fetch(this.apiUrl + 'rooms/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(roomList),
    });
  }

  deleteRoom(id: any) {
    return fetch(this.apiUrl + 'rooms/' + id, {
      method: 'DELETE',
    });
  }

  getAllCustomers() {
    return fetch(this.apiUrl + 'customers').then((res) => res.json());
  }

  getAllEmployees() {
    return fetch(this.apiUrl + 'employees/').then((res) => res.json());
  }

  addEmployee(obj: any) {
    return fetch(this.apiUrl + 'employees/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(obj),
    });
  }

  deleteEmployee(id: any) {
    return fetch(this.apiUrl + 'employees/' + id, {
      method: 'DELETE',
    });
  }

  getAllBookings() {
    return fetch(this.apiUrl + 'bookings').then((res) => res.json());
  }

  deleteBooking(id: number) {
    return fetch(this.apiUrl + 'bookings/' + id, {
      method: 'DELETE',
    });
  }

  createBooking(bookingDetails: any) {
    console.log(JSON.stringify(bookingDetails));

    return fetch(this.apiUrl + 'bookings/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(bookingDetails),
    });
  }
  deleteCustomer(id: number) {
    return fetch(this.apiUrl + 'customers/' + id, {
      method: 'DELETE',
    });
  }

  createNewCustomer(customerDetails: any) {
    console.log(JSON.stringify(customerDetails));
    return fetch(this.apiUrl + 'customers/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(customerDetails),
    });
  }
}
