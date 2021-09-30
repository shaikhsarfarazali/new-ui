import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenAccForPage } from './open-acc-for.page';

const routes: Routes = [
  {
    path: '',
    component: OpenAccForPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenAccForPageRoutingModule {}
