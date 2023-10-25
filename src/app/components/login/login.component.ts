import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  async onSubmit() {
    try {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      await this.authService.login(email, password)
      alert("logado com sucesso")
      this.router.navigate(['/labmedical/homepage']);
    } catch (e) {
      alert("dados incorretos")
    }
  }
}
