import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { ProgressTabComponent } from './progress/progress.tab.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ComponentsModule, CommonModule],
  declarations: [ProgressTabComponent],
  exports: [ProgressTabComponent],
})
export class TabsModule {}
