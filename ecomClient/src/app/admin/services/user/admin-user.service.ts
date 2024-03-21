import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from '../../../shared/services/header/header.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  userApi = `${environment.apiUrl}api/admin/users/`

  constructor(
    private http: HttpClient,
    private headerService: HeaderService
  ) { }

    // getUsers() : Observable<any> {
      
    // }

    getUserById(id: any) : Observable<any> {
      return this.http.get(this.userApi + id, {
        headers: this.headerService.createAuthorizationHeader()
      });
    }

    createUser(user: any) : Observable<any> {
      return this.http.post(this.userApi, user, {
        headers: this.headerService.createAuthorizationHeader()
      });
    }

    updateUser(user: any) : Observable<any> {
      return this.http.put(this.userApi + user.user_id, user, {
        headers: this.headerService.createAuthorizationHeader()
      });
    }

    deleteUser(id: any) : Observable<any> {
      return this.http.delete(this.userApi + id, {
        headers: this.headerService.createAuthorizationHeader()
      });
    }

}
