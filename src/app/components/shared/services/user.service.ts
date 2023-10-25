import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: IUser[] = [];

  private url = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  async registerUser(user: IUser) {
    try {
      await lastValueFrom(this.httpClient.post(this.url, user));
    } catch (e) {
      throw new Error('Erro ao cadastrar usuário');
    }
  }

  async getUser() {
    this.users = await lastValueFrom(this.httpClient.get<IUser[]>(this.url));
    return this.users;
  }
  
}
