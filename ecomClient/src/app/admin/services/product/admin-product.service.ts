import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductRequest } from '../../../shared/interfaces/ProductRequest';
import { HeaderService } from '../../../shared/services/header/header.service';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  apiUrl = environment.apiUrl;

  constructor(
    private headerService: HeaderService,
    private http: HttpClient
  ) { }

  addProduct(product: ProductRequest) : Observable<any> {
    return this.http.post(`${this.apiUrl}api/admin/product`, product, {
      headers: this.headerService.createAuthorizationHeader(),
    })
  }

  // deleteProduct(id: number) : Observable<any> {

  // }

  // updateProduct(product: Product) : Observable<any> {
    
  // }

  // getProduct(id: number) : Observable<any> {
    
  // }

  // getProducts() : Observable<any> {
    
  // }

}
