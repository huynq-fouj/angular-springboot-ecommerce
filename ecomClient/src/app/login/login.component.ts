import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../shared/services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserStorageService } from '../shared/services/user-storage/user-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm !: FormGroup;
  hiddePassword = true;
  isLoad = false;

  constructor(
    private toast : HotToastService,
    private formBuilder : FormBuilder,
    private router: Router,
    private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  tooglePasswordVisibility() {
    this.hiddePassword = !this.hiddePassword;
  }

  onSubmit() {
    this.isLoad = true;

    const loginRequest = this.loginForm.value;

    const toastLoading = this.toast.loading("Đang xử lý...");
    
    this.authService.login(loginRequest).subscribe({
      next: (response) => {
        toastLoading.close();
        this.handleLoginSuccess(response);
      },
      error: (error) => {
        toastLoading.close();
        this.handleLoginError(error);
      },
      complete: () => {

      }
    }).add(() => {
      this.isLoad = false;
    });

  }

  private handleLoginSuccess(response: any): void {
    this.toast.success(`Chào ${response?.userFullname}!`, { duration: 3000 });
    this.redirectBasedOnUserRole();
  }
  
  private handleLoginError(error: any): void {
    this.toast.error("Đăng nhập thất bại!", { duration: 3000 });
  }
  
  private redirectBasedOnUserRole(): void {
    if (UserStorageService.isAdmin()) {
      this.router.navigateByUrl("/admin");
    } else if (UserStorageService.isCustomer()) {
      this.router.navigateByUrl("/");
    }
  }

}
