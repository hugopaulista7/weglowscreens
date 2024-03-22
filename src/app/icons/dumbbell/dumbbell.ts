import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dumbbell-icon',
  templateUrl: 'dumbbell.html',
})
export class DumbbellIconComponent {
  @Input() width = '32px';
  @Input() height = '32px';
  @Input() fillColor = '#000';
}
