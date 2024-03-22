import { Component } from '@angular/core';
import { Medal } from 'src/app/models/medal';

@Component({
  selector: 'app-progress-tab',
  styleUrl: 'progress.tab.component.scss',
  templateUrl: 'progress.tab.component.html',
})
export class ProgressTabComponent {
  medals: Medal[] = [
    {
      text: '20 Completed Workouts',
      url: 'https://hugopaulista7.github.io/filehost/icon-20-round.png',
    },
    {
      text: '2 Week Ab Challenge',
      url: 'https://hugopaulista7.github.io/filehost/icon-square-abs.png',
    },
    {
      text: '3 Months Workout Streak',
      url: 'https://hugopaulista7.github.io/filehost/icon-7-hexagon.png',
    },
  ];
}
