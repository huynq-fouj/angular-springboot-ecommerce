import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { AdminCategoryService } from '../../../../services/category/admin-category.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UserStorageService } from '../../../../../shared/services/user-storage/user-storage.service';

@Component({
  selector: 'app-dialog-delete-category',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dialog-delete-category.component.html',
  styleUrl: './dialog-delete-category.component.css'
})
export class DialogDeleteCategoryComponent {

  constructor(
    private toast: HotToastService,
    private categoryService: AdminCategoryService,
    private dialogRef: MatDialogRef<DialogDeleteCategoryComponent>
  ) {}

  onSubmit() {
    if(!UserStorageService.isAdmin()) {
      this.toast.error("Không đủ thẩm quyền!");
      return;
    }
  }

}
