import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Infinite_Success_Event';


  userName = 'Vijay';
  upcomingEvent = {
    name: 'My Team Mega Workshop',
    location: 'Chennai Trade Centre',
    date: '2nd March 2023',
    time: '10:00 AM - 12:00 PM',
    ticketsLeft: 1011
  };
  weeklyStats = {
    ticketsSold: 702,
    revenue: 25200,
    eventsScheduled: 10,
    usersRegistered: 224
  };
  recentEvents = [
    { name: 'Max Meet-up', location: 'Chennai Trade Centre', date: '1st March 2023' },
    { name: 'Max Meet-up', location: 'Chennai Trade Centre', date: '2nd March 2023' },
    { name: 'Max Meet-up', location: 'Chennai Trade Centre', date: '3rd March 2023' },
    { name: 'Max Meet-up', location: 'Chennai Trade Centre', date: '4th March 2023' },
  ];
}



