import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
 [
  {
    path : 'directives',
    loadChildren: () => import('./features/1-directives/directives-feature.module').then(mod => mod.DirectivesFeatureModule),
    data: {
      display: 'Directives',
    }
  },
  {
    path : 'input-output',
    loadChildren: () => import('./features/2-input-outputs/input-outputs-feature.module').then(mod => mod.InputOutputsFeatureModule),
    data: {
      display: 'Input/Outputs',
    }
  },
  {
    path : 'children',
    loadChildren: () => import('./features/3-component-children/component-children-feature.module').then(mod => mod.ComponentChildrenFeatureModule),
    data: {
      display: 'Component Children',
    }
  },
  {
    path : 'dynamic',
    loadChildren: () => import('./features/4-dynamic-loading/dynamic-loading-feature.module').then(mod => mod.DynamicLoadingFeatureModule),
    data: {
      display: 'Dynamic Components',
    }
  },
  {
    path : 'life-cycle',
    loadChildren: () => import('./features/5-component-life-cycle/component-life-cycle-feature.module').then(mod => mod.ComponentLifeCycleFeatureModule),
    data: {
      display: 'Life Cycle',
    }
  },
  {
    path : 'forms',
    loadChildren: () => import('./features/6-angular-forms/angular-forms-feature.module').then(mod => mod.AngularFormsFeatreModule),
    data: {
      display: 'Angular Forms',
    }
  },
  {
    path : 'customs-controls',
    loadChildren: () => import('./features/7-custom-form-control/custom-form-control-feature.module').then(mod => mod.CustomFormControlFeatureModule),
    data: {
      display: 'Custom Form Controls',
    }
  },
  {
      path : 'chicago-sites',
      loadChildren: () => import('./features/8-chicago-sites/chicago-sites-feature.module').then(mod => mod.ChicagoSitesFeatureModule),
      data: {
        display: 'Chicago Sites - Bringing it all together',
      }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
