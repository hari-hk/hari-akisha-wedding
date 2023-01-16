import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
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
  countDownTime = {
    days: 0,
    hour: 0,
    min: 0,
    sec: 0,
  };

  ngOnInit(): void {
    interval(1000).subscribe((x) => {
      this.calculateCountDownTimer();
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (environment.production) {
        this.sound.play();
      }
    }, 300);
  }
  calculateCountDownTimer() {
    const weddingDate = new Date('2023-02-22 09:30:00');
    const msPerDay = 1000 * 60 * 60 * 24;
    const diffTime = weddingDate.getTime() - new Date().getTime();
    this.countDownTime.days = Math.floor(diffTime / msPerDay);
    this.countDownTime.hour = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    this.countDownTime.min = Math.floor((diffTime / (1000 * 60)) % 60);
    this.countDownTime.sec = Math.floor((diffTime / 1000) % 60);
  }

  openInMap(type: string) {
    const location =
      type === 'wedding'
        ? 'https://goo.gl/maps/hpZFBNdh7Yxcp1ti6'
        : 'https://goo.gl/maps/6fvSQLGkTD2evziN7';

    window.open(location, '_blank');
  }
}
