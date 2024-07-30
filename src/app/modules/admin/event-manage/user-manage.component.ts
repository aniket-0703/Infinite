import { Component } from '@angular/core';
import { EventService } from '../../../core/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrl: './user-manage.component.css'
})
export class UserManageComponent {
  events = [
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
  ];


  eventData: any;

  constructor(private eventService: EventService, private router:Router) { }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe(
      data => {
        this.eventData = data;
        console.log(this.eventData);
      },
      error => {
        console.error('Error fetching event data', error);
      }
    );
  }
  viewDetails(id: number): void {
    this.router.navigate(['/event', id]);

  }
}
