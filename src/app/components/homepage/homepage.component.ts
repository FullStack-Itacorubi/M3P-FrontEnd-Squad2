import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { IUser } from '../shared/interfaces/IUser';
import { IPatient } from '../shared/interfaces/IPatient';
import { PatientService } from '../shared/services/patient.service';
import { IPatientRequest } from '../shared/interfaces/IPatientRequest';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  data = {
    patients: 0,
    records: 0,
    exams: 0,
    medications: 0,
    diets: 0,
    exercises: 0,
  }

  type? = ''
  admin: boolean = false;

  users: IUser[] = []

  patients: IPatientRequest[] = [];

  constructor(private userService: UserService, private patientsService: PatientService, private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.users = await this.userService.getUser();
    this.loadPatients();  
    const infoUser = this.authService.getUserLogOn();
    this.type = infoUser?.sliceType
    if (this.type === 'administrator') {
      this.admin = true;
    }
  }

  loadPatients() {
    this.patientsService.getPatients().subscribe((data) => {
      this.patients = data;     
      this.data.patients = data.length
    });
  }

  patientCard(id: number) {
    this.patientsService.getPatientById(id).subscribe((data) => {
      console.log(data.id);
      // FALTA COMPONENTE DE PACIENTE PARA O RESTANTE FUNCIONAR:
      // this.router.navigate(['/labmedical/patient/' + data.id]); 
    });    
  }

  
  patientsFilter(){
    const input = document.getElementById('filterpatients') as HTMLInputElement;
    if (this.patients === undefined) return;
    console.log(input.value);
    this.patientsService.patientFilter(input.value, this.patients);
    
  }

}
