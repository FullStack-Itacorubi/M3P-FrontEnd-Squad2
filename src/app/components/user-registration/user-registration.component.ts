import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../shared/interfaces/IUser';
import { ToolbarHeaderService } from '../shared/services/toolbar-header.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent {
  newUserForm: FormGroup;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private headerService: ToolbarHeaderService
  ) {
    headerService.headerData = {
      title: 'Usuarios',
      icon: 'heroUsersSolid',
    };

    this.newUserForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(64),
        ],
      ],
      gender: ['', [Validators.required]],
      cpf: [
        '',[
        Validators.required,
        Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
      ]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      type: ['', [Validators.required]],
      status: [''],
    });
  }

  async onSubmit() {
    try {
      const formData = this.newUserForm.value;
      console.log(formData);
      const user: IUser = {
        fullName: formData.name,
        gender: formData.gender,
        cpf: formData.cpf,
        type: formData.type,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      };

      await this.userService.registerUser(user);
      this.router.navigate(['labmedical/homepage']);
      alert('cadastrado com suceso');

    } catch (e) {
      alert('dados de cadastro invalidos');
    }
  }
}
