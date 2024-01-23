export interface Booking {
  id: number;
  bookingFromDate: string;
  bookingToDate: string;
  bookingRate: number;
  userName: string;
  naration: string;
  name: string;
  mobileNo: string;
  roomName: string;
  email: string;
  aadharNo: string;
  city: string;
  address: string;
  bookingId?: number;
  roomId?: number;
  customerId?: number;
  createdDate?: string;
  createdBy?: string;
  hotelBookingDetails: string;
}
