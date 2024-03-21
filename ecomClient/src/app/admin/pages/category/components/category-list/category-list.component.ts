import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../../shared/interfaces/Category';
import { AdminCategoryService } from '../../../../services/category/admin-category.service';
import { DecodeHtmlEntitiesPipe } from "../../../../../shared/pipes/decode-html-entities.pipe";

@Component({
    selector: 'app-category-list',
    standalone: true,
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.css',
    imports: [DecodeHtmlEntitiesPipe]
})
export class CategoryListComponent implements OnInit {

  categories : Category[] = [];

  constructor(
    private categoryService: AdminCategoryService
  ) {}

  ngOnInit(): void {
     this.categoryService.getAllCategories().subscribe({
      next: data => {
        this.categories = data;
      },
      error: error => {
        console.log(error);
      }
     });
 }

}