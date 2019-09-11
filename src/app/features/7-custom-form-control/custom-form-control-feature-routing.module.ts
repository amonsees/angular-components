import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuPageComponent } from 'src/app/shared/pages/menu-page/menu-page.component';
import { CustomFormControlTestPageComponent } from './pages/custom-form-control-test-page/custom-form-control-test-page.component';

const featureRoutes: Route[] = [
    {
        path : '',
        component: MenuPageComponent,
        data: {
            display: 'Custom Form Controls',
            description: ''
        },
        children: [
            {
                path : 'custom-control',
                component: CustomFormControlTestPageComponent,
                data: {
                    display: 'Pills Select Example'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(featureRoutes)],
    exports: [RouterModule]
})
export class CustomFormControlFeatureRouting { }