import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuPageComponent } from 'src/app/shared/pages/menu-page/menu-page.component';
import { DnyamicLoadTestPageComponent } from './pages/dnyamic-load-test-page/dnyamic-load-test-page.component';

const componentRoutes: Route[] = [
  {
    path : '',
    component: DnyamicLoadTestPageComponent,
    data: {
        display: 'Dynamic Component Example'
    } 
  }
];

@NgModule({
    imports: [RouterModule.forChild(componentRoutes)],
    exports: [RouterModule]
})
export class DynamicLoadingFeatureRoutingModule { }