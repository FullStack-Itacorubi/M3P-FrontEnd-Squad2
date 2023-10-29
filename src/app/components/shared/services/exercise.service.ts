import { Injectable } from '@angular/core';
import { IExercise } from '../interfaces/IExercise';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private baseUrl = 'http://localhost:8080/api/exercicios'; 

  constructor(private httpClient: HttpClient) {}

  getExerciseById(id: string): Observable<IExercise> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<IExercise>(url);
  }
}
