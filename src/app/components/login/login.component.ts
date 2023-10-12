import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  async onSubmit() {
    try {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      await
      alert("logado com sucesso")
      console.log(`${email} logou usando ${password} como senha`);
    } catch (e) {
      alert("dados incorretos")
    }
  }
}
