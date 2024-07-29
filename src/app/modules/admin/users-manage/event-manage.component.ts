import { Component } from '@angular/core';

@Component({
  selector: 'app-event-manage',
  templateUrl: './event-manage.component.html',
  styleUrl: './event-manage.component.css'
})
export class EventManageComponent {
  events = [
    { name: 'Max Meet-up', venue: 'Chennai Trade Centre', date: '2nd March 2023', time: '10:00 AM' },
    // Add more events as needed
  ];
}
