import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesFeatureModule } from '../1-directives/directives-feature.module';
import { ComponentChildrenFeatureModule } from '../3-component-children/component-children-feature.module';
import { CustomFormControlFeatureModule } from '../7-custom-form-control/custom-form-control-feature.module';
import { ChicagoSitesPageComponent } from './pages/chicago-sites-page/chicago-sites-page.component';
import { ChicagoSiteFeatureRoutingModule } from './chicago-sites-feature-routing.module';
import { NumericDirective } from '../1-directives/directives/numeric.directive';
import { DataListComponent } from '../3-component-children/templates/components/data-list/data-list.component';
import { DataItemDirective } from '../3-component-children/templates/directives/data-item.directive';
import { PillListComponent } from '../7-custom-form-control/controls/pill-list/pill-list.component';
import { EditSiteComponent } from './pages/edit-site/edit-site.component';
import { ContainerComponent } from '../3-component-children/content-projection/components/container/container.component';
import { ChicagoSiteComponent } from './components/chicago-site/chicago-site.component';

@NgModule({
  declarations: [
    ChicagoSitesPageComponent,

    // Import from other modules  (In real application, these should be moved to shared)
    NumericDirective,
    ContainerComponent,
    DataListComponent,
    DataItemDirective,
    PillListComponent,
    EditSiteComponent,
    ChicagoSiteComponent


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
