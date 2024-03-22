import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-item',
  templateUrl: './highlight-item.component.html',
  styleUrls: ['./highlight-item.component.scss'],
})
export class HighlightItemComponent {
  @Input() item: { text: string; count: number } | undefined;
  constructor() {}
}
