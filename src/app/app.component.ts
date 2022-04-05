import { Component } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faCode = faCode;
  title = 'Angular Stencil';
}
