import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { CustomFormControlTestPageComponent } from './pages/custom-form-control-test-page/custom-form-control-test-page.component';

const featureRoutes: Route[] = [
  {
    path : '',
    component: CustomFormControlTestPageComponent,
    data: {
        display: 'Pills Select Example'
    }
  }
];

@NgModule({
    imports: [RouterModule.forChild(featureRoutes)],
    exports: [RouterModule]
})
export class CustomFormControlFeatureRouting { }
