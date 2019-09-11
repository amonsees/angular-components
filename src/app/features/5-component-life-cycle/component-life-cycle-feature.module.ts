import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { LifeCycleTestPageComponent } from './pages/life-cycle-test-page/life-cycle-test-page.component';
import { ComponentLifeCycleFeatureRoutingModule } from './component-life-cycle-feature-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
      LifeCycleComponent,

      LifeCycleTestPageComponent
  ],
  imports: [
    ComponentLifeCycleFeatureRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    LifeCycleTestPageComponent
  ],
  entryComponents: [
    LifeCycleTestPageComponent
  ]
})
export class ComponentLifeCycleFeatureModule { }
