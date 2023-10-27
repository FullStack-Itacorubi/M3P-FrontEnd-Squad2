import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../shared/interfaces/IUser';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      gender: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['', Validators.required]
    });
  }
  async onSubmit() {
    try{
      const formUser = this.registerForm.value;
      console.log(formUser);
      const user: IUser = {
        fullName: formUser.fullName,
        gender: formUser.gender,
        cpf: formUser.cpf,
        type: formUser.userType,
        phone: formUser.phoneNumber,
        email: formUser.email,
        password: formUser.password, 
      };
      await this.userService.registerUser(user);
      
      alert('Cadastro efetuado com sucesso!');
      this.router.navigate(['login']);
    } catch (e) {
      alert('Existem dados inválidos no formulário. Por favor, corrija-os e tente novamente.');
    }
  }
}

