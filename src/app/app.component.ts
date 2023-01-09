import { AfterViewInit, Component } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'hariaki';
  sound = new Howl({
    src: ['../assets/Anbil-Avan.mp3'],
    autoplay: false,
    loop: true,
    volume: 0.1,
    onend: function () {
      console.log('Finished!');
    },
  });

  ngAfterViewInit(): void {
    setTimeout(() => {
      // this.sound.play();
    }, 300);
  }

  openInMap(type: string) {
    const location =
      type === 'wedding'
        ? 'https://www.google.com/maps/dir//8666%2BCH8+YMCA+Marthandam+Conference+Hall,+Marthandam,+Tamil+Nadu+629165/@8.3110342,77.2114621,17z/data=!4m16!1m6!3m5!1s0x3b0455248365316d:0xcb5c190c0072302c!2sYMCA+Marthandam+Conference+Hall!8m2!3d8.3110325!4d77.2114608!4m8!1m0!1m5!1m1!1s0x3b0455248365316d:0xcb5c190c0072302c!2m2!1d77.2114608!2d8.3110325!3e2'
        : 'https://www.google.com/maps/dir//75VQ%2B9JF,+Kunnathoor,+Tamil+Nadu+629162/@8.2934319,77.1190006,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b05ab389477598b:0x3e29c528a4d37f6a!2m2!1d77.1890412!2d8.293438';
    window.open(location, '_blank');
  }
}
