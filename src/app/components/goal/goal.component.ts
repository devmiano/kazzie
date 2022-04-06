import { Component, OnInit } from '@angular/core';
import { Goal } from '../../classes/goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    { id: 1, name: 'Eat', description: 'Kukula' },
    { id: 2, name: 'Play', description: 'Kucheza' },
    { id: 3, name: 'Sleep', description: 'Kulala' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
