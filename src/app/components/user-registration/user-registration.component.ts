import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../shared/interfaces/IUser';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent {
  newUserForm: FormGroup;

  constructor(private http: HttpClient, private userService: UsersService) {
    this.newUserForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(64),
      ]),
      gender: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{11}$'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{11}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      type: new FormControl('', [Validators.required]),
      status: new FormControl(''),
    });
  }

  async onSubmit() {
    try {
      const formData = this.newUserForm.value;
      const user: IUser = {
        fullName: formData.name,
        gender: formData.gender,
        cpf: formData.cpf,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        type: formData.type,
        systemStatus: formData.systemStatus
      };
      this.userService.addUser(user);
      await alert('cadastrado com suceso');
    } catch (e) {
      alert('dados de cadastro invalido');
    }
  }
}
