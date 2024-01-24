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
    return fetch(this.apiEndPoint2 + 'employees', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(obj),
    });
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

  getAllEmployees() {
    return fetch(this.apiEndPoint2 + 'employees/').then((res) => res.json());
  }

  addEmployee(obj: any) {
    return fetch(this.apiEndPoint2 + 'employees/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(obj),
    });
  }

  deleteEmployee(id: any) {
    return fetch(this.apiEndPoint2 + 'employees/' + id, {
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

  createNewCustomer(customerDetails: any) {
    console.log(JSON.stringify(customerDetails));
    return fetch(this.apiEndPoint2 + 'customers/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(customerDetails),
    })
  }
  }



