import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  signupForm !: FormGroup;
  hiddePassword = true;
  isLoad = false;

  constructor(
    private toast : HotToastService,
    private formBuilder : FormBuilder,
    private router: Router,
    private authService: AuthService) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fullname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  tooglePasswordVisibility() {
    this.hiddePassword = !this.hiddePassword;
  }

  onSubmit() {
    this.isLoad = true;
    const password = this.signupForm.get("password")?.value;
    const confirmPassword = this.signupForm.get("confirmPassword")?.value;
    if(password !== confirmPassword) {
      this.isLoad = false;
      this.toast.error("Passwords do not match.", { duration: 3000 });
      return;
    }

    const toastLoading = this.toast.loading("Loading...");
    
    this.authService.register(this.signupForm.value).subscribe({
      next: (response) => {
        toastLoading.close();
        this.toast.success("Sign up successfull!", { duration: 3000 });
        this.router.navigateByUrl("/login");
      },
      error: (error) => {
        console.log(error);
        toastLoading.close();
        this.toast.error("Sign up failed! " + error?.error, { duration: 3000 });
      },
      complete: () => {
        console.log("Done");
      }
    }).add(() => {
      this.isLoad = false;
    });

  }

}
