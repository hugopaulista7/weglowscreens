import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  template: `<h2 class="text-red-orange text-xl font-sharpe italic mb-2">
    <ng-content></ng-content>
  </h2>`,
})
export class SectionTitleComponent {}
