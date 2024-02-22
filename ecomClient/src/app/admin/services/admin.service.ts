import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from '../../shared/services/user-storage/user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  createAuthorizationHeader() : HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', `Bearer ${UserStorageService.getToken()}`
    )
  }

}
