import { Component, OnInit } from '@angular/core';
import { Medal } from 'src/app/models/medal';

@Component({
  selector: 'app-awards-section',
  templateUrl: './awards-section.component.html',
  styleUrls: ['./awards-section.component.scss'],
})
export class AwardsSectionComponent {
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

  constructor() {}
}
