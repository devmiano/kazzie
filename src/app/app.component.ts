import { Component } from '@angular/core';
import { Goal } from './classes/goal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  goals: Goal[] = [
    { id: 1, name: 'Eat' },
    { id: 2, name: 'Play' },
    { id: 3, name: 'Sleep' },
  ];
}
