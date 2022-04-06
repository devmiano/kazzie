import { Component, OnInit } from '@angular/core';
import { Goal } from '../../classes/goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(
      1,
      'Eat',
      'To make the parent component receive this event, we need to catch the event being emitted in the parent component and define a function that will be triggered once this event is captured. '
    ),
    new Goal(
      2,
      'Play',
      'To make the parent component receive this event, we need to catch the event being emitted in the parent component and define a function that will be triggered once this event is captured. '
    ),
    new Goal(
      3,
      'Sleep',
      'To make the parent component receive this event, we need to catch the event being emitted in the parent component and define a function that will be triggered once this event is captured. '
    ),
  ];

  toggleDetails(index: number): void {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: any, index: number): void {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
