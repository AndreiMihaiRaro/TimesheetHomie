import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ActivitiesRoutingModule } from './activities-routing';
import { ActivitiesComponent } from './activities.component';
import { DurationPipe } from './pipes/duration';

@NgModule({
  declarations: [
    ActivitiesComponent,
    DurationPipe
  ],
  imports: [
    ActivitiesRoutingModule,
    CardModule,
    CommonModule
  ]
})
export class ActivitiesModule { }
