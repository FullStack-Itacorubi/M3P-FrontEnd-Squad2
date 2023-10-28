import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  @Input() pageTitle: string = 'Title';
  @Input() name? = '';
  @Input() email? = '';
  type? = ''

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    const infoUser = this.authService.getUserLogOn();
    this.name = infoUser?.sliceName;
    this.email = infoUser?.sliceEmail;
    this.type = infoUser?.sliceType
  }


}

