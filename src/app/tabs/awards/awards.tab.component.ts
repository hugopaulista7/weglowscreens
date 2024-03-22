import { Component } from '@angular/core';
import { Medal } from 'src/app/models/medal';

@Component({
  selector: 'app-awards-tab',
  templateUrl: 'awards.tab.component.html',
  styleUrls: ['awards.tab.component.scss'],
})
export class AwardsTabComponent {
  workouts: Medal[] = [
    {
      text: '15 Completed Workouts',
      url: 'https://hugopaulista7.github.io/filehost/icon-15-round.png',
    },
    {
      text: '10 Completed Workouts',
      url: 'https://hugopaulista7.github.io/filehost/icon-10-round.png',
    },
    {
      text: '5 Completed Workouts',
      url: 'https://hugopaulista7.github.io/filehost/icon-5-round.png',
    },
  ];

  weeklyWorkouts: Medal[] = [
    {
      text: '2 Months Workout Streak',
      url: 'https://hugopaulista7.github.io/filehost/icon-2-hexagon.png',
    },
    {
      text: '7 Weeks Workout Streak',
      url: 'https://hugopaulista7.github.io/filehost/icon-7-hexagon.png',
    },
    {
      text: '4 Weeks Workout Streak',
      url: 'https://hugopaulista7.github.io/filehost/icon-4-hexagon.png',
    },
  ];
  glowversary: Medal[] = [
    {
      text: '1 year Glowversary',
      url: 'https://hugopaulista7.github.io/filehost/icon-1-octogon.png',
    },
    {
      text: '6 months Glowversary',
      url: 'https://hugopaulista7.github.io/filehost/icon-6-octogon.png',
    },
    {
      text: '3 months Glowversary',
      url: 'https://hugopaulista7.github.io/filehost/icon-3-octogon.png',
    },
  ];
}
