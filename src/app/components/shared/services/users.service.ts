import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser'; // Import the IUser interface
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'http://localhost:8080/api/usuarios';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl);
  }
  getUserById(userId: number): Observable<IUser> {
    const userByIdUrl = `${this.usersUrl}/${userId}`;
    return this.http.get<IUser>(userByIdUrl);
  }
}
