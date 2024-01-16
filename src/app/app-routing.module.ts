import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingCalendarComponent } from './pages/booking-calendar/booking-calendar.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { UsersComponent } from './pages/users/users.component';

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
        path: 'dashboard',
        component: DashboardComponent,
      },
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
        path: 'booking-calendar',
        component: BookingCalendarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
