import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { CustomerComponent } from './pages/customer-list/customer.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { UsersComponent } from './pages/users/users.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'rooms',
        component: RoomsComponent,
      },
      {
        path: 'newBooking',
        component: NewBookingComponent,
      },
      {
        path: 'bookings',
        component: BookingListComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'newCustomer',
        component: NewCustomerComponent,
      },
      {
        path: 'customer',
        component: CustomerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
