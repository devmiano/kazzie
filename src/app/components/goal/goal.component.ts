import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/classes/goal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  goals: Goal[];

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

  constructor(goalService: GoalService) {
    this.goals = goalService.getGoals();
  }

  ngOnInit(): void {}
}
