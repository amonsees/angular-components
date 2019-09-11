// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { InputTestPageComponent } from './pages/input-test-page/input-test-page.component';
import { OutputTestPageComponent } from './pages/output-test-page/output-test-page.component';
import { TwoWayBindingTestPageComponent } from './pages/two-way-binding-test-page/two-way-binding-test-page.component';
import { MenuPageComponent } from 'src/app/shared/pages/menu-page/menu-page.component';
import { InvalidBindingTestPageComponent } from './pages/invalid-binding-test-page/invalid-binding-test-page.component';

const inputOutputRoutes: Route[] = [
    {
        path : '',
        component: MenuPageComponent,
        data: {
            display: 'Input Outputs',
            description: 'A list of input/output samples'
        },
        children: [
            {
                path : 'input',
                component: InputTestPageComponent,
                data: {
                    display: 'Input Example'
                }
            },
            {
                path : 'output',
                component: OutputTestPageComponent,
                data: {
                    display: 'Output Example'
                }
            },
            {
                path : 'two-way-binding',
                component: TwoWayBindingTestPageComponent,
                data: {
                    display: 'Two-way Binding Example'
                }
            },
            {
                path : 'invalid-binding',
                component: InvalidBindingTestPageComponent,
                data: {
                    display: 'Invalid Binding Example'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(inputOutputRoutes)],
    exports: [RouterModule]
})
export class InputOutputsFeatureRoutingModule { }
