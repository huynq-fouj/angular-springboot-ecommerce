import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { AdminCategoryService } from '../../../../services/category/admin-category.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { UserStorageService } from '../../../../../shared/services/user-storage/user-storage.service';

@Component({
  selector: 'app-dialog-add-category',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './dialog-add-category.component.html',
  styleUrl: './dialog-add-category.component.css'
})
export class DialogAddCategoryComponent implements OnInit {

  categoryForm !: FormGroup;
  isLoad: boolean = false;

  constructor (
    private toast: HotToastService,
    private categoryService: AdminCategoryService,
    private dialogRef: MatDialogRef<DialogAddCategoryComponent>,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    })
  }

  onSubmit() {
    if(this.categoryForm.valid) {

      if(!UserStorageService.isAdmin()) {
        this.toast.error("Không đủ thẩm quyền!");
        return;
      }

      const { name, description } = this.categoryForm.value;
      const category = {
        id: 0,
        name: name,
        description: description
      };
      
      this.isLoad = true;
      const toastLoading = this.toast.loading("Đang xử lý...");

      this.categoryService.addCategory(category).subscribe({
        next: res => {
          toastLoading.close();
          this.handleSuccess(res);
        },
        error: err => {
          toastLoading.close();
          this.handleError(err);
        }
      }).add(() => {
        this.isLoad = false;
        this.dialogRef.close();
      });
    } else {
      this.toast.error("Vui lòng nhập đầy đủ thông tin!");
    }

  }

  private handleSuccess(response: any) {
    console.log(response);
    this.toast.success('Thêm mới thành công');
    this.dialogRef.close();
  }
  private handleError(error: any) {
    console.log(error);
    this.toast.error('Thêm mới không thành công');
  }

}
