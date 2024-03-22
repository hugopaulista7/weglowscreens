import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabItem } from 'src/app/models/tab-item';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
})
export class HorizontalScrollComponent {
  @Input() items: Array<TabItem> = [];

  @Output() selected: EventEmitter<any> = new EventEmitter();

  constructor() {}

  selectedChanged(index: any) {
    this.items.forEach((el) => (el.isActive = false));
    this.items[index].isActive = true;

    this.selected.emit(this.items[index]);
  }
}
