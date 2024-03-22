import { NgModule } from '@angular/core';
import { ShortNamePipe } from './shortName/short-name.pipe';

@NgModule({
  declarations: [ShortNamePipe],
  exports: [ShortNamePipe],
})
export class PipesModule {}
