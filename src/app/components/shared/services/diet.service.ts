import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDiet } from '../interfaces/IDiet';
@Injectable({
  providedIn: 'root'
})
export class DietService {

  private baseUrl = 'http://localhost:8080/api/dietas'; // Replace with your actual API URL

  constructor(private httpClient: HttpClient) {}

  getDietById(id: string): Observable<IDiet> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<IDiet>(url);
  }
}
