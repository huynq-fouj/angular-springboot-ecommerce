import { Component } from '@angular/core';
import { CategoryListComponent } from "./components/category-list/category-list.component";
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddCategoryComponent } from './components/dialog-add-category/dialog-add-category.component';

@Component({
    selector: 'app-category',
    standalone: true,
    templateUrl: './category.component.html',
    styleUrl: './category.component.css',
    imports: [
        CategoryListComponent,
        MatButtonModule,
        MatDialogModule,
    ]
})
export class CategoryComponent {

    constructor(
        private dialog: MatDialog
    ) {}

    openDialog() {
        this.dialog.open(DialogAddCategoryComponent);
    }

}
