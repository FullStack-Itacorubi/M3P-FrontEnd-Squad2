import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPatient } from '../interfaces/IPatient';

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

    constructor(private http: HttpClient) {}

    getPatients(): Observable<IPatient[]> {
        return this.http.get<IPatient[]>(this.apiUrl);
    }

    getPatientById(id: number): Observable<IPatient> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<IPatient>(url);
    }

    addPatient(patient: IPatient): Observable<IPatient> {
        return this.http.post<IPatient>(this.apiUrl, patient);
    }

    updatePatient(patient: IPatient): Observable<IPatient> {
        const url = `${this.apiUrl}/${patient.id}`;
        return this.http.put<IPatient>(url, patient);
    }

    deletePatient(id: number): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
    }
    getPatientsByName(name: string): Observable<IPatient[]> {
        const url = `${this.apiUrl}?name_like=${name}`;
        return this.http.get<IPatient[]>(url);
      }
      
}
