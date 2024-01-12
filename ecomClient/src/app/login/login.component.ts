import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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
    
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.toast.success(`Hi ${response?.userFullname}!`, { duration: 3000 });
        this.router.navigateByUrl("/");
      },
      error: (error) => {
        this.toast.error("Login failed!", { duration: 3000 });
      },
      complete: () => {

      }
    }).add(() => {
      this.isLoad = false;
    });

  }

}
