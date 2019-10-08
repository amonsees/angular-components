// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { NumericDirectiveTestPageComponent } from './pages/numeric-directive-test-page/numeric-directive-test-page.component';
import { MenuPageComponent } from 'src/app/shared/pages/menu-page/menu-page.component';
import { SimpleDirectiveTestPageComponent } from './pages/simple-directive-test-page/simple-directive-test-page.component';

const directiveRoutes: Route[] = [
    {
        path : '',
        component: MenuPageComponent,
        data: {
            display: 'Directives',
            description: 'A list of sample directives'
        },
        children: [
            {
                path : 'simple-directive',
                component: SimpleDirectiveTestPageComponent,
                data: {
                    display: 'Simple Directive Example',
                }
            },
            {
                path : 'numeric-directive',
                component: NumericDirectiveTestPageComponent,
                data: {
                    display: 'Numeric Directive Example',
                }
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(directiveRoutes)],
    exports: [RouterModule]
})
export class DirectiveFeatureRoutingModule { }
