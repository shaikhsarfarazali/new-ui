import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenAccPage } from './open-acc.page';

const routes: Routes = [
  {
    path: '',
    component: OpenAccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenAccPageRoutingModule {}
