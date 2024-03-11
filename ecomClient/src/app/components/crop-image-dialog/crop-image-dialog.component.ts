import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { ImageCroppedEvent, ImageCropperModule } from 'ngx-image-cropper';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-crop-image-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ImageCropperModule,
    MatButtonModule,
  ],
  templateUrl: './crop-image-dialog.component.html',
  styleUrl: './crop-image-dialog.component.css'
})
export class CropImageDialogComponent {

  image: any;

  constructor(
    @Inject(DIALOG_DATA) public imageChangeEvent: any,
    public dialogRef: DialogRef<ImageCroppedEvent>
  ) {}

  imageCropped(event: any) {
    this.image = event;
  }
  
  imageLoaded() {}

  cropperReady() {}

  loadImageFailed() {}

  handleCropped() {
    this.dialogRef.close(this.image);
  }

}
