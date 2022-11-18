import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hariaki';
  // 8.312607, 77.210299
  openInMap() {
    window.open('https://goo.gl/maps/NJwKxuiGvmahandR9', '_blank');
  }
}
