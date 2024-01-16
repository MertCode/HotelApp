import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  apiEndPoint: string =
    'https://freeapi.miniprojectideas.com/api/HotelBooking/';
  constructor(private http: HttpClient) {}

  login(obj: any) {
    return this.http.post(this.apiEndPoint + 'Login', obj);
  }

  getAllRooms() {
    return this.http.get(this.apiEndPoint + 'GetAllRooms');
  }

  saveUpdateRoom(obj: any) {
    return this.http.post(this.apiEndPoint + 'SaveUpdateRoom', obj);
  }
  deleteRoom(id: any) {
    return this.http.delete(this.apiEndPoint + 'DeleteRoomByRoomId=' + id);
  }
}
