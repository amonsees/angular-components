import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedServiceFeatureRoutingModule } from './shared-service-feature-routing.module';

import { TimerTestPageComponent } from './pages/timer-test-page/timer-test-page.component';
import { IndependantTimerControlsComponent } from './components/independant-timer-controls/independant-timer-controls.component';

import { TimerControlsComponent } from './components/timer-controls/timer-controls.component';

@NgModule({
  declarations: [
    TimerControlsComponent,
    IndependantTimerControlsComponent,
    TimerTestPageComponent],
  imports: [
    CommonModule,
    SharedServiceFeatureRoutingModule
  ],
  exports: [
    TimerTestPageComponent
  ],
  entryComponents: [
    TimerTestPageComponent
  ]
})
export class SharedServiceFeatureModule { }
