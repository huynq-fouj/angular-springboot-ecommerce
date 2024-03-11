import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AdminProductService } from '../../../../services/product/admin-product.service';
import { Router } from '@angular/router';
import { Category } from '../../../../../shared/interface/Category';
import { MatIconModule } from '@angular/material/icon';
import { DecodeHtmlEntitiesPipe } from "../../../../../shared/pipes/decode-html-entities.pipe";
import { AdminCategoryService } from '../../../../services/category/admin-category.service';
import { MatButtonModule } from '@angular/material/button';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { CropImageDialogComponent } from '../../../../../components/crop-image-dialog/crop-image-dialog.component';

@Component({
    selector: 'app-add-product',
    standalone: true,
    templateUrl: './add-product.component.html',
    styleUrl: './add-product.component.css',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        DecodeHtmlEntitiesPipe,
        MatButtonModule,
        MatDialogModule
    ]
})
export class AddProductComponent implements OnInit{

  productForm !: FormGroup;
  isLoad: boolean = false;
  categories: Category[] = [];
  imageChangeEvent : any;
  imagePreview: any = "";

  constructor(
    private toast: HotToastService,
    private productService: AdminProductService,
    private categoryService: AdminCategoryService,
    private route: Router,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private dialog: Dialog
  ) {}

  ngOnInit(): void {
      this.productForm = this.fb.group({
        category_id: [0, [Validators.required]],
        name: ["", [Validators.required]],
        description: ["", [Validators.required]],
        price: ["", [Validators.required]]
      });

      this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: data => {
        this.categories = data;
      },
      error: error => {
        console.log(error);
      }
     });
  }

  onSubmit() {
    this.isLoad = true;

  }

  successHandler(response: any) {
    this.toast.success("Thêm sản phẩm thành công.");
    this.route.navigateByUrl("/admin/product");
  }

  errorHandler(error: any) {
    this.toast.error("Thêm mới không thành công");
  }

  fileChangeEvent(event : any) {
    this.imageChangeEvent = event;
    if(event.target.files[0]) {
      let dialogRef = this.dialog.open<ImageCroppedEvent>(CropImageDialogComponent, {
        data: event
      });

      console.log(dialogRef)
      
      dialogRef.closed.subscribe({
        next: result => {
          console.log(result);
          if(result) this.handleImageCropped(result);
        },
        error: err => { console.log(err) },
        complete: () => {
          event.target.value = '';
        }
      });
    }

  }

  handleImageCropped(event: ImageCroppedEvent) {
      this.imagePreview = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl ?? "");
  }

}
