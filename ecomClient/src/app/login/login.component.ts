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

    const email = this.loginForm.get("email")?.value;
    const password = this.loginForm.get("password")?.value;
    const loginRequest = {email, password};

    const toastLoading = this.toast.loading("Loading...");
    
    this.authService.login(loginRequest).subscribe({
      next: (response) => {
        toastLoading.close();
        this.toast.success(`Hi ${response?.userFullname}!`, { duration: 3000 });
        if(UserStorageService.isAdmin()) {
          this.router.navigateByUrl("/admin");
        }else if(UserStorageService.isCustomer()) {
          this.router.navigateByUrl("/");
        }
      },
      error: (error) => {
        toastLoading.close();
        this.toast.error("Login failed!", { duration: 3000 });
      },
      complete: () => {

      }
    }).add(() => {
      this.isLoad = false;
    });

  }

}
