import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { IPatient } from '../interfaces/IPatient';
import { IPatientRequest } from '../interfaces/IPatientRequest';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  // implementar no componente dessa maneira:
  // patients: IPatient[] = [];

  // constructor(private patientService: PatientService) {
  //   this.patientService.getPatients().subscribe(data => {
  //     this.patients = data;
  //     console.log(this.patients);

  //   })
  // }
  private apiUrl = 'http://localhost:3000/patients';
  // private apiUrl = 'http://localhost:8080/api/pacientes';
  constructor(private http: HttpClient) {}

  getPatients(): Observable<IPatientRequest[]> {
    return this.http.get<IPatientRequest[]>(this.apiUrl);
  }

  getPatientById(id: number): Observable<IPatientRequest> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IPatientRequest>(url);
  }

  async addPatient(patient: IPatient) {
    return lastValueFrom(this.http.post<IPatient>(this.apiUrl, patient));
  }

  updatePatient(patient: IPatientRequest): Observable<IPatient> {
    const url = `${this.apiUrl}/${patient.id}`;
    return this.http.put<IPatient>(url, patient);
  }

  deletePatient(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  getPatientsByName(name: string): Observable<IPatientRequest[]> {
    const url = `${this.apiUrl}?name_like=${name}`;
    return this.http.get<IPatientRequest[]>(url);
  }

  patientFilter(filter: string, patients: IPatientRequest[]){
    let allPatients: IPatientRequest[] = [];
    let patientsFiltered: IPatientRequest[] = [];
    const filterLowerCase = filter.toLowerCase();
    for (const patient of allPatients) {
        if (patient.name.includes(filterLowerCase))
        patientsFiltered.push(patient);
    }
    return patientsFiltered;
  }
}
