import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuPageComponent } from 'src/app/shared/pages/menu-page/menu-page.component';
import { LifeCycleTestPageComponent } from './pages/life-cycle-test-page/life-cycle-test-page.component';

const featureRoutes: Route[] = [
    {
        path : '',
        component: MenuPageComponent,
        data: {
            display: 'Component Life Cycle',
            description: ''
        },
        children: [
            {
                path : 'lifecycle-example',
                component: LifeCycleTestPageComponent,
                data: {
                    display: 'Component Life Cycle Example'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(featureRoutes)],
    exports: [RouterModule]
})
export class ComponentLifeCycleFeatureRoutingModule { }