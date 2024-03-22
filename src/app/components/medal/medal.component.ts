import { Component, Input, OnInit } from '@angular/core';
import { Medal } from 'src/app/models/medal';

@Component({
  selector: 'app-medal',
  templateUrl: './medal.component.html',
  styleUrls: ['./medal.component.scss'],
})
export class MedalComponent {
  @Input() props: Medal | undefined;
  constructor() {}
}
