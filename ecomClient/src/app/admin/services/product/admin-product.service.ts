import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductRequest } from '../../../shared/interfaces/ProductRequest';
import { HeaderService } from '../../../shared/services/header/header.service';
import { Product } from '../../../shared/interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  apiUrl = `${environment.apiUrl}api/admin/products`;

  constructor(
    private headerService: HeaderService,
    private http: HttpClient
  ) { }

  addProduct(product: ProductRequest) : Observable<any> {
    console.log(product);
    return this.http.post(this.apiUrl, product, {
      headers: this.headerService.createAuthorizationHeader(),
    })
  }

  deleteProduct(id: number) : Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
        headers: this.headerService.createAuthorizationHeader()
      }
    );
  }

  updateProduct(product: ProductRequest) : Observable<any> {
    return this.http.put(`${this.apiUrl}/${product.id}`, product, {
      headers: this.headerService.createAuthorizationHeader()
    });
  }

  getProduct(id: number) : Observable<any> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`,{
      headers: this.headerService.createAuthorizationHeader()
    });
  }

  // getProducts() : Observable<any> {
    
  // }

}
