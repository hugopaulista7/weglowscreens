import { Component, Input, OnInit } from '@angular/core';
import { Objective } from 'src/app/models/objective';

@Component({
  selector: 'app-objective-item',
  templateUrl: './objective-item.component.html',
  styleUrls: ['./objective-item.component.scss'],
})
export class ObjectiveItemComponent {
  @Input() objective: Objective | undefined;

  get timeRemaining() {
    if (!this.objective || !this.objective.dueDate) {
      return '0 days';
    }

    let targetDate = this.objective.dueDate;
    let currentDate = new Date();
    let timeDifference = targetDate.getTime() - currentDate.getTime();
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return `${days} days`;
  }

  constructor() {}
}
