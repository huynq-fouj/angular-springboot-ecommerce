import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http : HttpClient) { }

  register(signupRequest : any) : Observable<any> {
    return this.http.post(environment.apiUrl + "signup", signupRequest);
  }

  login(loginRequest : any) : Observable<any> {
    return this.http.post(environment.apiUrl + "authenticate", loginRequest);
  }

}
