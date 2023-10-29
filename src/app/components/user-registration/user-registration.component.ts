import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private headerService: ToolbarHeaderService
  ) {
    headerService.headerData = {
      title: 'Usuarios',
      icon: 'heroUsersSolid',
    };
    this.newUserForm = this.formBuilder.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(64),
        ],
      ],
      gender: ['', Validators.required],
      cpf: [
        '',
        Validators.required,
        Validators.pattern('^[0-9]{11}$'),
      ],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['', Validators.required],
    });
  }

  async onSubmit() {
    try {
      const formUser = this.newUserForm.value;
      console.log(formUser);
      const user: IUser = {
        fullName: formUser.fullName,
        gender: formUser.gender,
        cpf: formUser.cpf,
        type: formUser.userType,
        phone: formUser.phoneNumber,
        email: formUser.email,
        password: formUser.password,
        systemStatus : true,

      };
      await this.userService.registerUser(user);

      alert('Cadastro efetuado com sucesso!');
    } catch (e) {
      alert(
        'Existem dados inválidos no formulário. Por favor, corrija-os e tente novamente.'
      );
    }
  }
}
