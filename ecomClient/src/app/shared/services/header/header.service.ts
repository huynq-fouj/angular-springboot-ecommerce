import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from '../user-storage/user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  createAuthorizationHeader() : HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', `Bearer ${UserStorageService.getToken()}`
    )
  }

}
