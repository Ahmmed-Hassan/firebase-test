import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor( private fb: FormBuilder, private authService: AuthService){

  }
  signUpForm!: FormGroup;


  ngOnInit(): void {
      this.form();
  }
  form() {
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.email]],
      password: ['', Validators.required],
      cpassword: ['', [Validators.required]],
    });
  }
  onSubmit(){
    this.authService.register(this.signUpForm.value.email, this.signUpForm.value.password);
    this.form();
  }

  signInWithGoogle() {
    this.authService.googleSignIn();
  }
}
