import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fade-separator',
  templateUrl: './fade-separator.component.html',
  styleUrls: ['./fade-separator.component.scss'],
})
export class FadeSeparatorComponent {
  @Input() color = 'zinc-50';
}
