import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
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
      fullname: ["", [Validators.required, Validators.minLength(3)]],
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

    const { password, confirmPassword } = this.signupForm.value;

    if(password !== confirmPassword) {
      this.isLoad = false;
      this.toast.error("Mật khẩu xác nhận không khớp.", { duration: 3000 });
      return;
    }

    const toastLoading = this.toast.loading("Đang xử lý...");
    this.authService.register(this.signupForm.value).subscribe({
      next: (response) => {
        toastLoading.close();
        this.toast.success("Đang ký thành công!", { duration: 3000 });
        this.router.navigateByUrl("/login");
      },
      error: (error) => {
        toastLoading.close();
        this.toast.error("Đăng ký thất bại! " + error?.error, { duration: 3000 });
      },
      complete: () => {}
    }).add(() => {
      this.isLoad = false;
    });

  }

}
