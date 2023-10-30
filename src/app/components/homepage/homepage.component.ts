import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { IUser } from '../shared/interfaces/IUser';
import { IPatient } from '../shared/interfaces/IPatient';
import { PatientService } from '../shared/services/patient.service';
import { IPatientRequest } from '../shared/interfaces/IPatientRequest';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { IUserRequest } from '../shared/interfaces/IUserRequest';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  data = {
    patients: 0,
    records: 0,
    exams: 0,
    medications: 0,
    diets: 0,
    exercises: 0,
  };

  type? = '';
  admin: boolean = false;

  users: IUserRequest[] = [];
  searchUsersResults: IUserRequest[] = [];

  patients: IPatientRequest[] = [];
  searchPatientsResults: IPatientRequest[] = [];

  constructor(
    private usersService: UsersService,
    private patientService: PatientService,
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.loadUsers();
    this.loadPatients();
    const infoUser = this.authService.getUserLogOn();
    this.type = infoUser?.sliceType;
    if (this.type === 'administrator') {
      this.admin = true;
    }
  }

  loadUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
      this.data.patients = data.length;
    });
  }
  
  loadPatients() {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
      this.data.patients = data.length;
    });
  }

  patientCard(id: number) {
    this.patientService.getPatientById(id).subscribe((data) => {
      console.log(data.id);
      // FALTA COMPONENTE DE PACIENTE PARA O RESTANTE FUNCIONAR:
      this.router.navigate(['/labmedical/patient/' + data.id]);
    });
  }

  searchUsers(query: string) {
    if (query) {
      this.usersService.getUsersByName(query).subscribe((users) => {
        this.searchUsersResults = users;
        this.users = users;
      });
    } else {
      this.searchUsersResults = [];
    }
  }


  searchPatients(query: string) {
    if (query) {
      this.patientService.getPatientsByName(query).subscribe((patients) => {
        this.searchPatientsResults = patients;
        this.patients = patients;
      });
    } else {
      this.searchPatientsResults = [];
    }
  }
}
