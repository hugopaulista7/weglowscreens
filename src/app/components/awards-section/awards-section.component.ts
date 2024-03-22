import { Component, OnInit } from '@angular/core';
import { Medal } from 'src/app/models/medal';

@Component({
  selector: 'app-awards-section',
  templateUrl: './awards-section.component.html',
  styleUrls: ['./awards-section.component.scss'],
})
export class AwardsSectionComponent {
  medals: { text: string; medal: Medal }[] = [];

  constructor() {}
}
