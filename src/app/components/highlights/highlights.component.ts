import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
})
export class HighlightsComponent {
  tabs: { isActive: boolean; text: string }[] = [
    {
      isActive: true,
      text: 'Week',
    },
    {
      isActive: false,
      text: 'Month',
    },
    {
      isActive: false,
      text: 'Year',
    },
    {
      isActive: false,
      text: 'All Time',
    },
  ];

  items: {
    count: number;
    text: string;
  }[] = [
    {
      count: 167,
      text: "Days you've worked out!",
    },
    {
      count: 186,
      text: 'Workouts completed',
    },
    {
      count: 3,
      text: 'Recorded personal best',
    },
  ];

  constructor() {}

  selectTab(index: number) {
    this.tabs.forEach((el) => (el.isActive = false));
    this.tabs[index].isActive = true;
  }
}
