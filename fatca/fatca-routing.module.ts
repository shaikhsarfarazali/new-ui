import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatcaPage } from './fatca.page';

const routes: Routes = [
  {
    path: '',
    component: FatcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FatcaPageRoutingModule {}
