import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  apiUrl = environment.apiUrl;

  constructor(
    private adminService: AdminService,
    private http: HttpClient
  ) { }

  addProduct(product: any) : Observable<any> {
    return this.http.post(`${this.apiUrl}api/admin/product`, product, {
      headers: this.adminService.createAuthorizationHeader(),
    })
  }
}
