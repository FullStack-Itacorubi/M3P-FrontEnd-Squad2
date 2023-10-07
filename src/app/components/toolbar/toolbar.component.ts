import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  @Input() pageTitle: string = 'Title';
  @Input() name = 'Joao da Silva';
  @Input() email = 'joaodasilva@email.com';
  constructor() { }

}

