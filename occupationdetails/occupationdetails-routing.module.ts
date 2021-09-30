import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OccupationdetailsPage } from './occupationdetails.page';

const routes: Routes = [
  {
    path: '',
    component: OccupationdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OccupationdetailsPageRoutingModule {}
