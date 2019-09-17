import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { TimerTestPageComponent } from './pages/timer-test-page/timer-test-page.component';

const componentRoutes: Route[] = [
  {
    path : '',
    component: TimerTestPageComponent,
    data: {
        display: 'Shared Service Example'
    } 
  }
];

@NgModule({
    imports: [RouterModule.forChild(componentRoutes)],
    exports: [RouterModule]
})
export class SharedServiceFeatureRoutingModule { }