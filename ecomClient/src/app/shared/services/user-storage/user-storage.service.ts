import { Injectable } from '@angular/core';

const TOKEN = 'ecom-token';
const USER = 'ecom-user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  public saveToken(token: string) : void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public saveUser(user: any) : void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken() : string | null {
    return localStorage.getItem(TOKEN);
  }

  static getUser() : any {
    const user = localStorage.getItem(USER);
    if(user != null) {
      return JSON.parse(user);
    }
    return null;
  }

  static getUserId() : string {
    const user = this.getUser();
    if(user != null) {
      return user?.userId;
    }
    return "";
  }

  static getUserRole() : string {
    const user = this.getUser();
    if(user != null) {
      return user?.role;
    }
    return "";
  }

  static isAdmin() : boolean {
    if(this.getToken == null) {
      return false;
    }
    const role = this.getUserRole();
    return role === "ADMIN";
  }

  static isCustomer() : boolean {
    if(this.getToken == null) {
      return false;
    }
    const role = this.getUserRole();
    return role === "CUSTOMER";
  }

  static signOut() : void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }

}
