import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenAccPageRoutingModule } from './open-acc-routing.module';

import { OpenAccPage } from './open-acc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenAccPageRoutingModule
  ],
  declarations: [OpenAccPage]
})
export class OpenAccPageModule {}
