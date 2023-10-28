import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from '../interfaces/IUser';

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
        return this.getUserLogOn;
      }
    }
     throw new Error ("Credências inválidas")
  }

  getUserLogOn() {
    const userString = localStorage.getItem('user');
    if (userString === null) return;
    const userLogOn = <IUser>JSON.parse(userString);
    const fullName = userLogOn.name;
    const email = userLogOn.email;
    const type = userLogOn.type;
    const infoUser = {
      sliceName: fullName?.substring(0, fullName?.indexOf(' ')),
      sliceEmail: email?.substring(0,email?.length),
      sliceType: type
    }

    return infoUser;
    
  }

  logged() {
    const user = localStorage.getItem('user');
    return user !== null;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
