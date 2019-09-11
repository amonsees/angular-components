import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericDirectiveTestPageComponent } from './pages/numeric-directive-test-page/numeric-directive-test-page.component';
import { DirectiveFeatureRoutingModule } from './directives-feature-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SimpleDirective } from './directives/simple.directive';
import { SimpleDirectiveTestPageComponent } from './pages/simple-directive-test-page/simple-directive-test-page.component';
import { NumericDirective } from './directives/numeric.directive';

@NgModule({
  declarations: [
    SimpleDirective,
    NumericDirective,

    SimpleDirectiveTestPageComponent,
    NumericDirectiveTestPageComponent,
  ],
  imports: [
    DirectiveFeatureRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    SimpleDirectiveTestPageComponent,
    NumericDirectiveTestPageComponent,
    NumericDirective
  ],
  entryComponents: [
    SimpleDirectiveTestPageComponent,
    NumericDirectiveTestPageComponent
  ]
})
export class DirectivesFeatureModule { }
