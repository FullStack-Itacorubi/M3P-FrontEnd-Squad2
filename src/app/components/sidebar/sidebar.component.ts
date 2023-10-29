import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  userName: string | undefined = '';

  // @Input() name = 'Joao da Silva';
  // @Input() email = 'joaodasilva@email.com';
  brandName = 'LabMedical';
  brandImgUrl =
    'https://img.freepik.com/vetores-gratis/hospital-logo-design-vector-medical-cross_53876-136743.jpg';
  collapsed = false;
  menuItems = [
    {
      text: 'Inicio',
      icon: 'heroHomeSolid',
      selected: true,
      route: 'homepage',
    },
    {
      text: 'Usuarios',
      icon: 'heroUsersSolid',
      selected: false,
      route: 'user-registration',
    },
    {
      text: 'Pacientes',
      icon: 'heroUserGroupSolid',
      selected: false,
      route: 'patients',
    },
    {
      text: 'Prontuários',
      icon: 'heroDocumentTextSolid',
      selected: false,
      route: 'records',
    },
    {
      text: 'Consultas',
      icon: 'heroClockSolid',
      selected: false,
      route: 'appointment',
    },
    {
      text: 'Exames',
      icon: 'heroDocumentTextSolid',
      selected: false,
      route: 'exam',
    },
    {
      text: 'Dietas',
      icon: 'heroCakeSolid',
      selected: false,
      route: 'diet',
    },
    {
      text: 'Exercícios',
      icon: 'heroHeartSolid',
      selected: false,
      route: 'exercise',
    },
  ];

  // test(text: string) {
  //   this.menuItems = this.menuItems.map((item) =>
  //     item.text === text
  //       ? { ...item, selected: true }
  //       : { ...item, selected: false }
  //   );
  //   return this.menuItems;
  // }

  test(item: any) {
    this.menuItems = this.menuItems.map(
      (thisItem) =>
        (thisItem.text === item.text
          ? { ...thisItem, selected: true }
          : { ...thisItem, selected: false }
          )
    );
  }

  check() {
  console.log(this.menuItems);

  }

  constructor(private authService: AuthService, private router: Router) {}

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
