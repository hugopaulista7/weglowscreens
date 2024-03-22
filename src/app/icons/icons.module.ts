import { NgModule } from '@angular/core';
import { DumbbellIconComponent } from './dumbbell/dumbbell';
import { CommonModule } from '@angular/common';
import { ChevronRightIconComponent } from './chevron-right/chevron-right.icon';
import { LiposuctionIconComponent } from './lipo/liposuction.icon';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DumbbellIconComponent,
    ChevronRightIconComponent,
    LiposuctionIconComponent,
  ],
  exports: [
    DumbbellIconComponent,
    ChevronRightIconComponent,
    LiposuctionIconComponent,
  ],
})
export class IconModule {}
