import { Injectable } from '@angular/core';
import { IExam } from '../interfaces/IExam';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private baseUrl = 'http://localhost:8080/api/exame'; 

  constructor(private httpClient: HttpClient) {}

  getExamById(id: string): Observable<IExam> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<IExam>(url);
  }
}
