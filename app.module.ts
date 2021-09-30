import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ng2-tooltip-directive';


import { ImageCropperModule } from './image-cropper/image-cropper.module';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, ToastrModule.forRoot(), BrowserAnimationsModule, TooltipModule,
    ImageCropperModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    Camera,
    Crop
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
