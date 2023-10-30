import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { IUserRequest } from '../interfaces/IUserRequest';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersUrl = 'http://localhost:3000/users';
  // private usersUrl = 'http://localhost:8080/api/usuarios';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<IUserRequest[]> {
    return this.http.get<IUserRequest[]>(this.usersUrl);
  }
  getUserById(userId: number): Observable<IUserRequest> {
    const userByIdUrl = `${this.usersUrl}/${userId}`;
    return this.http.get<IUserRequest>(userByIdUrl);
  }

  getUsersByName(name: string): Observable<IUserRequest[]> {
    const url = `${this.usersUrl}?name_like=${name}`;
    return this.http.get<IUserRequest[]>(url);
  }

  async addUser(user: IUser) {
    return lastValueFrom(this.http.post<IUser>(this.usersUrl, user));
  }
}
