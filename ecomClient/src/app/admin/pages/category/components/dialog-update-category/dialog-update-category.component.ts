import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { UserStorageService } from '../../../../../shared/services/user-storage/user-storage.service';
import { AdminCategoryService } from '../../../../services/category/admin-category.service';
import { DialogDeleteCategoryComponent } from '../dialog-delete-category/dialog-delete-category.component';

@Component({
  selector: 'app-dialog-update-category',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dialog-update-category.component.html',
  styleUrl: './dialog-update-category.component.css'
})
export class DialogUpdateCategoryComponent {

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
