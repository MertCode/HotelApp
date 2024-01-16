import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent implements OnInit {
  months: string[] = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
  ];
  currentMonthIndex: number = 0;

  ngOnInit() {
    this.updateCalendar();
  }

  updateCalendar(): void {
    const currentMonthElement = document.getElementById('current-month');
    const daysContainer = document.getElementById('days-container');
    if (currentMonthElement && daysContainer) {
      const currentMonth: string = this.months[this.currentMonthIndex];
      currentMonthElement.innerHTML = `${currentMonth}<br><span style="font-size:18px">2024</span>`;

      // Clear previous days
      daysContainer.innerHTML = "";
      // Populate days for the current month
      for (let day: number = 1; day <= 31; day++) {
        const dayElement: HTMLLIElement = document.createElement('li');
        dayElement.textContent = day.toString();
        daysContainer.appendChild(dayElement);
      }
    }
  }

  nextMonth(): void {
    this.currentMonthIndex = (this.currentMonthIndex + 1) % this.months.length;
    this.updateCalendar();
  }

  prevMonth(): void {
    this.currentMonthIndex = (this.currentMonthIndex - 1 + this.months.length) % this.months.length;
    this.updateCalendar();
  }
}
