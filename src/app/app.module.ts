import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingCalendarComponent } from './pages/booking-calendar/booking-calendar.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { CustomerComponent } from './pages/customer-list/customer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { UsersComponent } from './pages/users/users.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingCalendarComponent,
    BookingListComponent,
    DashboardComponent,
    LayoutComponent,
    RoomsComponent,
    UsersComponent,
    CustomerComponent,
    NewCustomerComponent,
    NewBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}