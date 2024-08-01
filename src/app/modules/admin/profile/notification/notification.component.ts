import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  todaysNotifications = [
    { text: 'New member registration request received.', unread: true },
    { text: 'Member has requested for the updated changes in the profile', unread: false },
    { text: 'New member registration request received.', unread: false },
    { text: 'Member has requested for the updated changes in the profile', unread: false }
  ];

  yesterdaysNotifications = [
    { text: 'New member registration request received.', unread: false },
    { text: 'Member has requested for the updated changes in the profile', unread: false }
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(faUserCircle, faCircle);
  }
}
