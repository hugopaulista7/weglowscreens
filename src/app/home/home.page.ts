import { Component } from '@angular/core';
import { TabItem, TabItemId } from '../models/tab-item';
import { Medal } from '../models/medal';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  horizontalItems: Array<TabItem> = [
    {
      id: TabItemId.progress,
      text: 'Progress',
      isActive: true,
    },
    {
      id: TabItemId.photos,
      text: 'Photos',
      isActive: false,
    },
    {
      id: TabItemId.activity,
      text: 'Activity',
      isActive: false,
    },
    {
      id: TabItemId.awards,
      text: 'Awards',
      isActive: false,
    },
  ];

  tabActive = this.horizontalItems[0];

  medal: Medal = {
    shape: 'round',
    text: '20',
    isStreak: false,
  };

  constructor() {}
}
