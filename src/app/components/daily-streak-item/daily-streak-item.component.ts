import { Component, Input, OnInit } from '@angular/core';
import { Streak } from 'src/app/models/streak';

@Component({
  selector: 'app-daily-streak-item',
  templateUrl: './daily-streak-item.component.html',
  styleUrls: ['./daily-streak-item.component.scss'],
})
export class DailyStreakItemComponent {
  @Input() streak: Streak | undefined;

  constructor() {}
}
