import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { TemplateFormTestPageComponent } from './template-forms/pages/template-form-test-page/template-form-test-page.component';
import { ReactiveSimpleFormTestPageComponent } from './reactive-forms/pages/reactive-simple-form-test-page/reactive-simple-form-test-page.component';
import { ReactiveFormTestPageComponent } from './reactive-forms/pages/reactive-form-test-page/reactive-form-test-page.component';
import { TemplateSimpleFormTestPageComponent } from './template-forms/pages/template-simple-form-test-page/template-simple-form-test-page.component';

import { MenuPageComponent } from 'src/app/shared/pages/menu-page/menu-page.component';

const featureRoutes: Route[] = [
    {
        path : '',
        component: MenuPageComponent,
        data: {
            display: 'Angular Forms',
            description: 'Example of template and reactive forms'
        },
        children: [
            {
                path : 'template-form',
                component: TemplateSimpleFormTestPageComponent,
                data: {
                    display: 'Simple Template Form Example'
                }
            },
            {
                path : 'reactive-form-simple',
                component: ReactiveSimpleFormTestPageComponent,
                data: {
                    display: 'Simple Reactive Form Example'
                }
            },
            {
                path : 'template-form-validation',
                component: TemplateFormTestPageComponent,
                data: {
                    display: 'Template Form Validation Example'
                }
            },
            {
                path : 'reactive-form',
                component: ReactiveFormTestPageComponent,
                data: {
                    display: 'Reactive Form Validation Example'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(featureRoutes)],
    exports: [RouterModule]
})
export class AngularFormsFeatureRoutingModule { }
