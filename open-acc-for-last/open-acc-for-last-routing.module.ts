import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenAccForLastPage } from './open-acc-for-last.page';

const routes: Routes = [
  {
    path: '',
    component: OpenAccForLastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenAccForLastPageRoutingModule {}
