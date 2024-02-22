import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../../shared/interface/Category';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AdminService } from '../admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private adminService: AdminService
    ) { }

  addCategory(category: Category) : Observable<any> {
    return this.http.post(`${this.apiUrl}api/admin/category`, category, {
      headers: this.adminService.createAuthorizationHeader(),
    });
  }

  getAllCategories() : Observable<any> {
    return this.http.get<Category[]>(`${this.apiUrl}api/admin/categories`, {
      headers: this.adminService.createAuthorizationHeader(),
    });
  }

  deleteCategory(id: number) : Observable<any> {
    return this.http.delete(`${this.apiUrl}api/admin/category/${id}`, {
      headers: this.adminService.createAuthorizationHeader(),
    })
  }

  updateCategory(category: Category) : Observable<any> {
    return this.http.put(`${this.apiUrl}api/admin/category`, category, {
      headers: this.adminService.createAuthorizationHeader(),
    })
  }

}
