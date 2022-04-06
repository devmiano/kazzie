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
      'Angular Objectives',
      'To make the parent component receive this event, we need to catch the event being emitted in the parent component and define a function that will be triggered once this event is captured. ',
      new Date(2022, 3, 10)
    ),
    new Goal(
      2,
      'Creating Angular Components',
      'To make the parent component receive this event, we need to catch the event being emitted in the parent component and define a function that will be triggered once this event is captured. ',
      new Date(2022, 3, 13)
    ),
    new Goal(
      3,
      'Angular Form Validation',
      'To make the parent component receive this event, we need to catch the event being emitted in the parent component and define a function that will be triggered once this event is captured. ',
      new Date(2022, 3, 17)
    ),
    new Goal(
      4,
      'Intent in Design',
      'To make the parent component receive this event, we need to catch the event being emitted in the parent component and define a function that will be triggered once this event is captured. ',
      new Date(2022, 3, 21)
    ),
    new Goal(
      5,
      'Angular Week I IP',
      'To make the parent component receive this event, we need to catch the event being emitted in the parent component and define a function that will be triggered once this event is captured. ',
      new Date(2022, 3, 27)
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

  addNewGoal(goal: Goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  constructor() {}

  ngOnInit(): void {}
}
