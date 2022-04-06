import { Component, OnInit } from '@angular/core';
import { Goal } from '../../classes/goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, 'Eat', 'Kukula'),
    new Goal(2, 'Play', 'Kucheza'),
    new Goal(3, 'Sleep', 'Kulala'),
  ];

  toggleDetails(index: number): void {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  constructor() {}

  ngOnInit(): void {}
}
