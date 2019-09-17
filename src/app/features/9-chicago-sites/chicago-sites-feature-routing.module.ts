import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChicagoSitesPageComponent } from './pages/chicago-sites-page/chicago-sites-page.component';
import { EditSiteComponent } from './pages/edit-site/edit-site.component';

const featureRoutes: Route[] = [
    {
        path : '',
        component: ChicagoSitesPageComponent,
        children: [
            {
                path : 'add',
                component: EditSiteComponent,
            },
            {
                path : 'edit/:id',
                component: EditSiteComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(featureRoutes)],
    exports: [RouterModule]
})
export class ChicagoSiteFeatureRoutingModule { }