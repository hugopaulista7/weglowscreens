import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-button',
  template: `<button
    class="bg-transparent text-xs flex justify-center items-center font-bold section-header-button"
  >
    <span class="mr-2"> {{ text }} </span>
    <app-chevron-right width="12px" height="12px"></app-chevron-right>
  </button>`,
  styleUrl: 'section.scss',
})
export class SectionButtonComponent {
  @Input() text = 'View all';
}
