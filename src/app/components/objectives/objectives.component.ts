import { Component, OnInit } from '@angular/core';
import { Objective } from 'src/app/models/objective';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss'],
})
export class ObjectivesComponent {
  objectives: Objective[] = [
    {
      title: 'Target',
      objective: 'Lose Weight',
      icon: 'body',
    },
    {
      title: 'Wedding Day',
      objective: '25 Jun 2024',
      icon: 'calendar',
      dueDate: new Date('06/24/2024'),
    },
    {
      title: 'Wellness Goal',
      objective: 'Have More Energy',
      icon: 'meditation',
    },
  ];

  constructor() {}
}
