import { Component } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo';

  constructor(private notify: NotificationService) {
    // this.notify.add('Esto es una demos');
    // this.notify.remove(69);
  }
}
