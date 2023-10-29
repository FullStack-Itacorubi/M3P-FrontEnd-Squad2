import { Injectable } from '@angular/core';
import { IMedication } from '../interfaces/IMedication';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private baseUrl = 'http://localhost:8080/api/medicamentos'; 

  constructor(private httpClient: HttpClient) {}

  getMedicationById(id: string): Observable<IMedication> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<IMedication>(url);
  }
}
