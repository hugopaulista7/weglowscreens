import { Component, OnInit } from '@angular/core';
import { Streak } from 'src/app/models/streak';

@Component({
  selector: 'app-daily-streak',
  templateUrl: './daily-streak.component.html',
  styleUrls: ['./daily-streak.component.scss'],
})
export class DailyStreakComponent {
  constructor() {}

  streaks: Array<Streak> = [
    {
      weekDayName: 'Monday',
      isActive: false,
    },
    {
      weekDayName: 'Tuesday',
      isActive: true,
    },
    {
      weekDayName: 'Wednesday',
      isActive: false,
    },
    {
      weekDayName: 'Thursday',
      isActive: false,
    },
    {
      weekDayName: 'Friday',
      isActive: true,
    },
    {
      weekDayName: 'Saturday',
      isActive: false,
    },
    {
      weekDayName: 'Sunday',
      isActive: true,
    },
  ];
}
