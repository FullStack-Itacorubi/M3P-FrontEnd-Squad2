import { Injectable } from '@angular/core';
import { IConsultation } from '../interfaces/IAppointment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = 'http://localhost:8080/api/consultas'; 

  constructor(private httpClient: HttpClient) {}

  getAppointmentById(id: string): Observable<IConsultation> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<IConsultation>(url);
  }
}
