import { Component } from '@angular/core';
import { Product } from '../../../../../shared/interfaces/Product';
import { AdminProductService } from '../../../../services/product/admin-product.service';
import { HotToastService } from '@ngneat/hot-toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,

  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  pageSize: number = 5;
  pageNum: number = 1;
  countPages: number = 1;
  products: Product[] = [];
  product: Product | null | undefined;
  isLoad: boolean = false;

  constructor(
    private productService: AdminProductService,
    private toast: HotToastService,
  ) {}

  deleteProduct(product: Product) {
    this.product = {...product};
  }

  confirmDeleteProduct() {
    
  }

}
