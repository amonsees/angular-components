import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomFormControlFeatureRouting } from './custom-form-control-feature-routing.module';

import { CustomFormControlTestPageComponent } from './pages/custom-form-control-test-page/custom-form-control-test-page.component';

import { PillListComponent } from './controls/pill-list/pill-list.component';

@NgModule({
  declarations: [
    PillListComponent,
    CustomFormControlTestPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    CustomFormControlFeatureRouting
  ],
  exports: [
    CustomFormControlTestPageComponent,
    PillListComponent
  ],
  entryComponents: [
    CustomFormControlTestPageComponent
  ]
})
export class CustomFormControlFeatureModule { }
