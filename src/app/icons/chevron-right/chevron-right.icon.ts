import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chevron-right',
  template: `<svg
    [attr.width]="width"
    [attr.height]="height"
    [attr.fill]="fill"
    class="bi bi-chevron-right"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
    />
  </svg>`,
})
export class ChevronRightIconComponent {
  @Input() width = '16px';
  @Input() height = '16px';
  @Input() fill = 'currentColor';
}
