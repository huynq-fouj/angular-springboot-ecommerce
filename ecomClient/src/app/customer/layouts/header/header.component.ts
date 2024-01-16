import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserStorageService } from '../../../shared/services/user-storage/user-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isCustomerLogin : boolean = UserStorageService.isCustomer();
  isAdminLogin : boolean = UserStorageService.isAdmin();
  user : any;
  avatarUrl = "./assets/images/profile-img.jpg";

  constructor(
    private router : Router
  ) {}

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      this.isCustomerLogin = UserStorageService.isCustomer();
      this.isAdminLogin = UserStorageService.isAdmin();
    });

    this.user = UserStorageService.getUser();
    if(this.user?.image) {
      this.avatarUrl = this.user?.image;
    }
  }

  tryLogOut() {
    UserStorageService.signOut();
    this.router.navigateByUrl("/login");
  }

}
