import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './content-child/components/parent/parent.component';
import { ChildComponent } from './content-child/components/child/child.component';
import { ParentMultiChildComponent } from './content-child/components/parent-multi-child/parent-multi-child.component';
import { TimerComponent } from './view-child/components/timer/timer.component';
import { ReferenceChildTestPageComponent } from './view-child/pages/reference-child-test-page/reference-child-test-page.component';
import { ViewChildTestPageComponent } from './view-child/pages/view-child-test-page/view-child-test-page.component';
import { ConentChildTestPageComponent } from './content-child/pages/conent-child-test-page/conent-child-test-page.component';
import { ContainerComponent } from './content-projection/components/container/container.component';
import { ContentProjectionTestPageComponent } from './content-projection/pages/content-projection-test-page/content-projection-test-page.component';
import { TemplateTestPageComponent } from './templates/pages/template-test-page/template-test-page.component';
import { MenuPageComponent } from 'src/app/shared/pages/menu-page/menu-page.component';
import { Route, RouterModule } from '@angular/router';


const componentRoutes: Route[] = [
    {
        path : '',
        component: MenuPageComponent,
        data: {
            display: 'Component Children',
            description: 'A list of component children samples'
        },
        children: [
            {
                path : 'reference-child',
                component: ReferenceChildTestPageComponent,
                data: {
                    display: 'Reference Child Sample'
                }
            },
            {
                path : 'view-child',
                component: ViewChildTestPageComponent,
                data: {
                    display: 'View Child Sample'
                }
            },
            {
                path : 'content-projection',
                component: ContentProjectionTestPageComponent,
                data: {
                    display: 'Content Projection Sample'
                }
            },
            {
                path : 'content-child',
                component: ConentChildTestPageComponent,
                data: {
                    display: 'Content Child Sample'
                }
            },
            {
                path : 'template',
                component: TemplateTestPageComponent,
                data: {
                    display: 'Template Sample'
                }
            },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(componentRoutes)],
    exports: [RouterModule]
})
export class ComponentChildrenFeatureRoutingModule { }
