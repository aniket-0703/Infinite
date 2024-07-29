import { Component } from '@angular/core';
import { RegisterService } from '../../../core/register.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { emailOrMobileValidator } from './validator';
import { ToastrService } from 'ngx-toastr';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword: boolean = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private toastr: ToastrService, private router:Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.email]],
      mobileNumber: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/)
      ]]
    }, { validator: emailOrMobileValidator() });
  }

  ngOnInit(): void { }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.registerService.registerUser(this.registerForm.value).subscribe(response => {

        this.toastr.success('Registration successful');
        this.router.navigate(['otp'])
      }, error => {
        this.toastr.error('Registration failed');
      });
    } else {
      this.registerForm.markAllAsTouched();
      this.toastr.error('Please fill the form correctly');
    }
  }
}
