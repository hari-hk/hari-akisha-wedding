import { AfterViewInit, Component } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'hariaki';
  // 8.312607, 77.210299

  sound = new Howl({
    src: ['../assets/Anbil-Avan.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.1,
    onend: function () {
      console.log('Finished!');
    },
  });

  openInMap() {
    window.open('https://goo.gl/maps/NJwKxuiGvmahandR9', '_blank');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.sound.play();
    }, 300);
  }
}
