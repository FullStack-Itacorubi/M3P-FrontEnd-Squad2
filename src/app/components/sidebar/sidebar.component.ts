import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() name = 'Joao da Silva';
  @Input() email = 'joaodasilva@email.com';
  brandName = 'LabMedical';
  brandImgUrl =
    'https://img.freepik.com/vetores-gratis/hospital-logo-design-vector-medical-cross_53876-136743.jpg';
  collapsed = false;
  menuItems = [
    { text: 'Pacientes', icon: 'heroUserGroupSolid', selected: false },
    { text: 'Consultas', icon: 'heroClockSolid', selected: true },
    { text: 'Exames', icon: 'heroDocumentTextSolid', selected: false },
    { text: 'Dietas', icon: 'heroCakeSolid', selected: false },
    { text: 'Exercícios', icon: 'heroHeartSolid', selected: false },
  ];

  test(text: string) {
    this.menuItems = this.menuItems.map((item) =>
      item.text === text
        ? { ...item, selected: true }
        : { ...item, selected: false }
    );
  }
}
