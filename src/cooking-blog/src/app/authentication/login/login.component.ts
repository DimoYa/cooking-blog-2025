import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { emailValidator } from '../utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnDestroy {

  subscription: Subscription = new Subscription();
  loginFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required]]
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  login(): void {
    if (this.loginFormGroup.invalid) {
      return;
    }
    
    const { email, password } = this.loginFormGroup.value;

    const body = {
      username: email,
      password: password,
    };

    // Example placeholder for the login functionality
    // this.subscription.add(
    //   this.authenticationService.login$(body).subscribe(() => {
    //     this.router.navigate(['/home']);
    //   })
    // );
  }

  get f() {
    return this.loginFormGroup.controls as { [key: string]: any }; // Cast to allow index access
  }
}
