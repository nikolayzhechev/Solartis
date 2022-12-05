import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = null;
  @ViewChild('loginForm') form!: NgForm

  onSubmit() {
    const loginData = this.form.value;
    // authenticate with Firebase
  }
}
