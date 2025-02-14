import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { emailValidator, fullNameValidator, passwordMatch, phoneNumberValidator } from '../utils';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnDestroy {
  getCodes: string[] = ['359', '124', '152'];
  subscription = new Subscription();

  registerFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerFormGroup = this.createForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: new FormControl(null, [Validators.required, emailValidator]),
      fullname: new FormControl(null, [Validators.required, fullNameValidator]),
      passwords: new FormGroup({
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
        ]),
        rePassword: new FormControl(null, [
          Validators.required,
          passwordMatch(this.registerFormGroup?.controls['password']),
        ]),
      }),
      phoneCode: new FormControl(this.getCodes[0]),
      phoneNumber: new FormControl(null, phoneNumberValidator),
      photo: new FormControl(null),
    });
  }

  register(): void {
    if (this.registerFormGroup.invalid) return;

    const { email, fullname, phoneCode, phoneNumber, photo, passwords } = this.registerFormGroup.value;

    const body = {
      username: email,
      fullname: fullname,
      phoneCode: phoneCode,
      phoneNumber: phoneNumber,
      photo: photo,
      password: passwords.password,
    };

    this.subscription.add(
      // this.authenticationService.register$(body).subscribe(() => {
      //   this.router.navigate(['user/login']);
      // })
    );
  }

  get f() {
    return this.registerFormGroup.controls;
  }

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.get('passwords') as FormGroup;
  }
}
