import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipHardSkillsComponent } from './components/handles/chip-hard-skills/chip-hard-skills.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipHardSkillsComponent,
    ExperienceCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
