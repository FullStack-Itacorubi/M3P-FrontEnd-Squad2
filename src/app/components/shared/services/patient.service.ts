import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { IPatient } from '../interfaces/IPatient';
import { IPatientRequest } from '../interfaces/IPatientRequest';

@Injectable({
    providedIn: 'root'
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
    private apiUrl = 'http://localhost:8080/api/pacientes';
    private recordsUrl='http://localhost:8080/api/prontuarios?idPaciente=';
    constructor(private http: HttpClient) {}

    getPatients(): Observable<IPatient[]> {
        return this.http.get<IPatient[]>(this.apiUrl);
    }

    getPatientById(id: number): Observable<IPatient> {
        const url = `${this.recordsUrl}${id}`;
        return this.http.get<IPatient>(url);
    }

    async addPatient(patient: IPatient) {
      try{
        console.log(patient);
        patient.systemStatus = true;
        return lastValueFrom(this.http.post<IPatient>(this.apiUrl, patient));

      }catch(e) {
        throw new Error('Erro ao cadastrar paciente')
      }
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

}
