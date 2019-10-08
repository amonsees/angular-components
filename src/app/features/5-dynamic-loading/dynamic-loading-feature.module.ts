import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DynamicLoadingFeatureRoutingModule } from './dynamic-loading-feature-routing.module';

import { DnyamicLoadTestPageComponent } from './pages/dnyamic-load-test-page/dnyamic-load-test-page.component';
import { DynamicLoaderComponent } from './components/dynamic-loader/dynamic-loader.component';
import { DynamicHostDirective } from './directives/dynamic-host.directive';

import { SquareComponent } from './components/shapes/square/square.component';
import { CircleComponent } from './components/shapes/circle/circle.component';
import { TriangleComponent } from './components/shapes/triangle/triangle.component';


@NgModule({
  declarations: [
    DnyamicLoadTestPageComponent,
    DynamicLoaderComponent,
    DynamicHostDirective,
    SquareComponent,
    CircleComponent,
    TriangleComponent,
  ],
  imports: [
    DynamicLoadingFeatureRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    DnyamicLoadTestPageComponent,
  ],
  entryComponents: [
    DnyamicLoadTestPageComponent,

    // Dynamic components must be set as Entry components
    SquareComponent,
    CircleComponent,
    TriangleComponent,
  ]
})
export class DynamicLoadingFeatureModule { }
