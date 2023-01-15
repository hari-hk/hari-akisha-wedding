import { AfterViewInit, Component } from '@angular/core';
import { Howl, Howler } from 'howler';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'hariaki';
  sound = new Howl({
    src: ['../assets/Naan_Pizhai.mp3'],
    autoplay: environment.production,
    loop: true,
    volume: 0.1,
    onend: function () {
      console.log('Finished!');
    },
  });

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.sound.play();
    }, 300);
  }

  openInMap(type: string) {
    const location =
      type === 'wedding'
        ? 'https://goo.gl/maps/hpZFBNdh7Yxcp1ti6'
        : 'https://goo.gl/maps/6fvSQLGkTD2evziN7';

    window.open(location, '_blank');
  }
}
