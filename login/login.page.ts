import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };




  isFormInvalid: boolean = false;
  login = new FormGroup({

  });
  isSubmitted = false;
  emailreq: boolean = false;


  // 20-09-21 https://source.unsplash.com/1600x900/?man,casual
  capturedSnapURL:any="../../assets/images/img_1.jpg";
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private fb: FormBuilder, private router: Router,
    private camera: Camera,
    private crop: Crop,
    public actionSheetController: ActionSheetController,
    private file: File) {}

  ngOnInit(): void {
    this.login = this.fb.group({
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      acceptTerms: [false, [Validators.requiredTrue]]
    });
  }

  takeSnap() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI
      
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
    }, (err) => {
      
      console.log(err);
      // Handle error
    });
  }

  get errorControl() {
    return this.login.controls;
  }

  submitForm(ev) {
    this.isSubmitted = true;
    if (!this.login.valid) {
      console.log(ev)
      let mobile = ev.mobile;
      if(mobile == "9511607251"){
        this.emailreq = false
      }
      else{
        this.emailreq = true
      }
      return false;
    } 
    this.router.navigate(['/otp']);
  }


  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.cropImage(imageData)
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  cropImage(fileUrl) {
    this.crop.crop(fileUrl, { quality: 50 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0])
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }

  showCroppedImage(ImagePath) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.croppedImagepath = base64;
      this.capturedSnapURL = this.croppedImagepath;
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }
}