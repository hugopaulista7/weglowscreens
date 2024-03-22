import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';
import { CommonModule } from '@angular/common';
import { DailyStreakComponent } from './daily-streak/daily-streak.component';
import { DailyStreakItemComponent } from './daily-streak-item/daily-streak-item.component';
import { IconModule } from '../icons/icons.module';
import { PipesModule } from '../pipes/pipes.module';
import { HighlightsComponent } from './highlights/highlights.component';
import { HighlightItemComponent } from './highlight-item/highlight-item.component';
import { SectionTitleComponent } from './util/section-title.component';
import { SectionContentComponent } from './util/section-content.component';
import { AwardsSectionComponent } from './awards-section/awards-section.component';
import { MedalComponent } from './medal/medal.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { IonicModule } from '@ionic/angular';
import { ObjectiveItemComponent } from './objective-item/objective-item.component';
import { NotesComponent } from './notes/notes.component';
import { SectionButtonComponent } from './util/section-button.component';

@NgModule({
  imports: [CommonModule, IconModule, PipesModule, IonicModule],
  declarations: [
    NavbarComponent,
    HorizontalScrollComponent,
    DailyStreakComponent,
    DailyStreakItemComponent,
    HighlightsComponent,
    HighlightItemComponent,
    SectionTitleComponent,
    SectionContentComponent,
    AwardsSectionComponent,
    MedalComponent,
    ObjectivesComponent,
    ObjectiveItemComponent,
    SectionButtonComponent,
    NotesComponent,
  ],
  exports: [
    NavbarComponent,
    HorizontalScrollComponent,
    DailyStreakComponent,
    DailyStreakItemComponent,
    HighlightsComponent,
    HighlightItemComponent,
    SectionTitleComponent,
    SectionContentComponent,
    AwardsSectionComponent,
    MedalComponent,
    ObjectivesComponent,
    ObjectiveItemComponent,
    NotesComponent,
    SectionButtonComponent,
  ],
})
export class ComponentsModule {}
