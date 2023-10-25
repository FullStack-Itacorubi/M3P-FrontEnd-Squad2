import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  async login(email: string, password: string){
    const users = await this.userService.getUser();
    for (const user of users){
      const userMatch = email === user.email;
      const passwordMatch = password === user.password;
      if (userMatch && passwordMatch) {
        localStorage.setItem('user', JSON.stringify(user));
        return;
      }
    }
     throw new Error ("Credências inválidas")
  }
}
