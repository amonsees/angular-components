import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuPageComponent } from './pages/menu-page/menu-page.component';

@NgModule({
  declarations: [
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuPageComponent
  ],
  entryComponents: [
    MenuPageComponent
  ]
})
export class SharedModule { }
