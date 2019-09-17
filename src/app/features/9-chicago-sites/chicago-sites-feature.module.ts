import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ChicagoSitesPageComponent } from './pages/chicago-sites-page/chicago-sites-page.component';
import { ChicagoSiteFeatureRoutingModule } from './chicago-sites-feature-routing.module';
import { ChicagoSiteComponent } from './components/chicago-site/chicago-site.component';
import { EditSiteComponent } from './pages/edit-site/edit-site.component';


// We should never use any items from other feature modules
//   This is an example of what not to do and to show the error when loading this module if other modules have been loaded
import { NumericDirective } from '../1-directives/directives/numeric.directive';
import { ContainerComponent } from '../3-component-children/content-projection/components/container/container.component';
import { DataListComponent } from '../3-component-children/templates/components/data-list/data-list.component';
import { DataItemDirective } from '../3-component-children/templates/directives/data-item.directive';
import { PillListComponent } from '../8-custom-form-control/controls/pill-list/pill-list.component';

@NgModule({
  declarations: [
    ChicagoSitesPageComponent,
    EditSiteComponent,
    ChicagoSiteComponent,

    // Import from other modules  (In a real application, these should be moved to shared)
    NumericDirective,
    ContainerComponent,
    DataListComponent,
    DataItemDirective,
    PillListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,

    ChicagoSiteFeatureRoutingModule
  ],
  exports: [
    ChicagoSitesPageComponent,
    EditSiteComponent
  ],
  entryComponents : [
    ChicagoSitesPageComponent,
    EditSiteComponent
  ]

})
export class ChicagoSitesFeatureModule { }
