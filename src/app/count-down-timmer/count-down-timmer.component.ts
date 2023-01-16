import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-count-down-timmer',
  templateUrl: './count-down-timmer.component.html',
  styleUrls: ['./count-down-timmer.component.scss'],
})
export class CountDownTimmerComponent implements OnInit {
  countDownTime = {
    days: 0,
    hour: 0,
    min: 0,
    sec: 0,
  };

  hideTimmer: boolean = false;
  constructor() {}

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.calculateCountDownTimer();
    });
  }
  calculateCountDownTimer() {
    const weddingDate = new Date('2023-02-22 09:30:00');
    const msPerDay = 1000 * 60 * 60 * 24;
    const diffTime = weddingDate.getTime() - new Date().getTime();
    this.countDownTime.days = Math.floor(diffTime / msPerDay);
    this.countDownTime.hour = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    this.countDownTime.min = Math.floor((diffTime / (1000 * 60)) % 60);
    this.countDownTime.sec = Math.floor((diffTime / 1000) % 60);

    this.hideTimmer =
      this.countDownTime.days === 0 &&
      this.countDownTime.hour === 0 &&
      this.countDownTime.min === 0;
  }
}
