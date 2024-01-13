import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { UserStorageService } from '../../shared/services/user-storage/user-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
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

  constructor(
    private router : Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.isCustomerLogin = UserStorageService.isCustomer();
      this.isAdminLogin = UserStorageService.isAdmin();
    });
    console.log(this.isAdminLogin, this.isCustomerLogin);
  }

  tryLogOut() {
    UserStorageService.signOut();
    this.router.navigateByUrl("/login");
  }

}
