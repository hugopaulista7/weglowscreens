import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { ProgressTabComponent } from './progress/progress.tab.component';
import { CommonModule } from '@angular/common';
import { AwardsTabComponent } from './awards/awards.tab.component';

@NgModule({
  imports: [ComponentsModule, CommonModule],
  declarations: [ProgressTabComponent, AwardsTabComponent],
  exports: [ProgressTabComponent, AwardsTabComponent],
})
export class TabsModule {}
