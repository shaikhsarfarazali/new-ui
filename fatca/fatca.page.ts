import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NotificationService } from '../services/notification.service';
import { PopoverController } from '@ionic/angular';
import { popoverController } from '@ionic/core';
import { FatcaPopComponent } from '../component/fatca-pop/fatca-pop.component';

@Component({
  selector: 'app-fatca',
  templateUrl: './fatca.page.html',
  styleUrls: ['./fatca.page.scss'],
})
export class FatcaPage implements OnInit {

  fatcaData: FormGroup;
  countries: any = ['India', 'USA', 'Russia', 'China'];
  isresident: any = 'Yes';
  constructor(
    private fb: FormBuilder,
    private notifyService: NotificationService,
    private router: Router,
    private alertController: AlertController,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.fatcaData = this.fb.group({
      country: ['', Validators.required],
      taxId: ['', Validators.required]
    })
  }

  residentStatus(ev) {
    this.isresident = ev.detail.value
  }

  checkForError(status, data) {
    if (status) {
      let userdata = data;
      this.router.navigate(['/bankdetails']);
    } else {
      this.notifyService.message('Please insert the data before proceeding');
    }
  }

  async openPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: FatcaPopComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
  }
  
}
