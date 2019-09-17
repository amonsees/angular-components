import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormTestPageComponent } from './reactive-forms/pages/reactive-form-test-page/reactive-form-test-page.component';
import { ReactiveSimpleFormTestPageComponent } from './reactive-forms/pages/reactive-simple-form-test-page/reactive-simple-form-test-page.component';
import { TemplateSimpleFormTestPageComponent } from './template-forms/pages/template-simple-form-test-page/template-simple-form-test-page.component';
import { AngularFormsFeatureRoutingModule } from './angular-forms-routing-feature.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormTestPageComponent } from './template-forms/pages/template-form-test-page/template-form-test-page.component';

@NgModule({
  declarations: [
    TemplateSimpleFormTestPageComponent,
    TemplateFormTestPageComponent,
    
    ReactiveSimpleFormTestPageComponent,
    ReactiveFormTestPageComponent,
  ],
  imports: [
    AngularFormsFeatureRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TemplateSimpleFormTestPageComponent,
    TemplateFormTestPageComponent,
    
    ReactiveSimpleFormTestPageComponent,
    ReactiveFormTestPageComponent,
  ],
  entryComponents: [
    TemplateSimpleFormTestPageComponent,
    TemplateFormTestPageComponent,
    
    ReactiveSimpleFormTestPageComponent,
    ReactiveFormTestPageComponent,
  ]
})
export class AngularFormsFeatreModule { }
