import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTestPageComponent } from './pages/input-test-page/input-test-page.component';
import { OutputTestPageComponent } from './pages/output-test-page/output-test-page.component';
import { TwoWayBindingTestPageComponent } from './pages/two-way-binding-test-page/two-way-binding-test-page.component';
import { InputOutputsFeatureRoutingModule } from './input-outputs-feature-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { InputOnlyComponent } from './components/input-only/input-only.component';
import { OutputOnlyComponent } from './components/output-only/output-only.component';
import { ProtectedInputOnlyComponent } from './components/protected-input-only/protected-input-only.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { CleanerProtectedInputOnlyComponent } from './components/cleaner-protected-input-only/cleaner-protected-input-only.component';
import { InvalidBindingTestPageComponent } from './pages/invalid-binding-test-page/invalid-binding-test-page.component';

@NgModule({
  declarations: [
    InputTestPageComponent,
    OutputTestPageComponent,
    TwoWayBindingTestPageComponent,
    InputOnlyComponent,
    OutputOnlyComponent,
    ProtectedInputOnlyComponent,
    TwoWayBindingComponent,
    CleanerProtectedInputOnlyComponent,
    InvalidBindingTestPageComponent
  ],
  imports: [
    InputOutputsFeatureRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    InputTestPageComponent,
    OutputTestPageComponent,
    TwoWayBindingTestPageComponent,
    InvalidBindingTestPageComponent
  ],
  entryComponents: [
    InputTestPageComponent,
    OutputTestPageComponent,
    TwoWayBindingTestPageComponent,
    InvalidBindingTestPageComponent
  ]
})
export class InputOutputsFeatureModule { }
