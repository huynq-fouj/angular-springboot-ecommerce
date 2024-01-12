import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  constructor(
    private toast : HotToastService,
    private formBuilder : FormBuilder,
    private router: Router,
    /*private authService: AuthService*/) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fullname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]]
    });
  }

  tooglePasswordVisibility() {
    this.hiddePassword = !this.hiddePassword;
  }

  onSubmit() {
    const password = this.signupForm.get("password")?.value;
    const confirmPassword = this.signupForm.get("confirmPassword")?.value;
  }

}
