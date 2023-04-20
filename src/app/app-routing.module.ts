import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'login' },
  {path: 'login', component:LoginComponent},
  {path: 'sign-up', component:SignupComponent},
  {path: 'verify-email', component:VerifyEmailComponent},
  {path: 'forgot-password', component:ForgotPasswordComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
