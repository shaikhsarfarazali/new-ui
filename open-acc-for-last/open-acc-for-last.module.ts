import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenAccForLastPageRoutingModule } from './open-acc-for-last-routing.module';

import { OpenAccForLastPage } from './open-acc-for-last.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenAccForLastPageRoutingModule
  ],
  declarations: [OpenAccForLastPage]
})
export class OpenAccForLastPageModule {}
