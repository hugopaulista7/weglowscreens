import { Component } from '@angular/core';

@Component({
  selector: 'app-section-content',
  template: `<div
    class="flex justify-between align-center py-4 px-2 rounded-lg max-w-full bg-white"
  >
    <ng-content></ng-content>
  </div>`,
})
export class SectionContentComponent {}
