import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: 'login', /*canActivate: [AuthenticatedGuard],*/ component: LoginComponent },
  { path: 'register', /*canActivate: [AuthenticatedGuard],*/ component: RegisterComponent }
];