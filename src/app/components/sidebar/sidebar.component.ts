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
    {text: 'Inicio', icon:'heroHomeSolid', selected: true, route: 'labmedical/homepage'},
    {text: 'Usuarios', icon:'heroUsersSolid', selected: false, route: 'labmedical/users'},
    {text: 'Medicos', icon:'jamActivity', selected: false, route: 'labmedical/doctors'},
    {text: 'Pacientes', icon: 'heroUserGroupSolid', selected: false, route: 'labmedical/patients'},
    {text: 'Consultas', icon: 'heroClockSolid', selected: false, route: 'labmedical/appointment'},
    {text: 'Exames', icon: 'heroDocumentTextSolid', selected: false, route: 'labmedical/exams'},
    {text: 'Dietas', icon: 'heroCakeSolid', selected: false, route: 'labmedical/diets'},
    {text: 'Exercícios', icon: 'heroHeartSolid', selected: false, route: 'labmedical/exercises'}

  ];

  test(text: string) {
    
    this.menuItems = this.menuItems.map((item) =>
      item.text === text
        ? { ...item, selected: true }
        : { ...item, selected: false }
    );
  }

  constructor(private authService: AuthService, private router: Router) { }


  logOut(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
