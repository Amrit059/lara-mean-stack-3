import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SchedulingComponent],
  exports: [SchedulingComponent]
})
export class SchedulingModule { }
