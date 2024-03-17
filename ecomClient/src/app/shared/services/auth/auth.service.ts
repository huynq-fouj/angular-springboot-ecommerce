import { UserStorageService } from './../user-storage/user-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SignupRequest } from '../../interfaces/SignupRequest';
import { LoginRequest } from '../../interfaces/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiUrl: string = environment.apiUrl;

  constructor(
    private http : HttpClient,
    private userStorageService : UserStorageService
    ) { }

  register(signupRequest : SignupRequest) : Observable<any> {
    return this.http.post(`${this.apiUrl}signup`, signupRequest);
  }

  login(loginRequest : LoginRequest) : Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = loginRequest;
    return this.http.post(`${this.apiUrl}authenticate`, body, {headers, observe: "response"}).pipe(
      map((res) => {
        const token = res.headers.get('Authorization')?.substring(7);
        const user = res.body;
        if(token && user) {
          this.userStorageService.saveToken(token);
          this.userStorageService.saveUser(user);
          return user;
        }
        return false;
      })
    );
  }



}
