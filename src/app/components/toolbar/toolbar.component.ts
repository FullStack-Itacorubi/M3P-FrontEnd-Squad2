import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ToolbarHeaderService } from '../shared/services/toolbar-header.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  // @Input()
  // pageTitle: string = 'teste';
  @Input() name? = '';
  @Input() email? = '';

  constructor(private authService: AuthService, private headerService : ToolbarHeaderService) { }


  ngOnInit(): void {
    const infoUser = this.authService.getUserLogOn();
    this.name = infoUser?.sliceName
    this.email = infoUser?.sliceEmail
  }

  get pageTitle() : string {
    return this.headerService.headerData.title
  }
  get icon() : string {
    return this.headerService.headerData.icon
  }

}

