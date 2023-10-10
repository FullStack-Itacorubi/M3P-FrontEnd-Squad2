import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  admin: boolean = true;

  users = [
    {
      username: 'John Doe',
      gender: 'male',
      type: 'doctor'
    },
  {
    username: 'Mary Bludson',
    gender: 'female',
    type: 'administrator'
  },
  {
    username: 'Jack Smith',
    gender: 'undefined',
    type: 'nurse'
  }
]

  value = ['','','','','','','','','','',''];

}
