import { UserStorageService } from './../user-storage/user-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http : HttpClient,
    private userStorageService : UserStorageService
    ) { }

  register(signupRequest : any) : Observable<any> {
    return this.http.post(environment.apiUrl + "signup", signupRequest);
  }

  login(loginRequest : any) : Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = loginRequest;
    return this.http.post(environment.apiUrl + "authenticate", body, {headers, observe: "response"}).pipe(
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
