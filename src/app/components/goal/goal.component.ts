import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from 'src/app/classes/goal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GoalService } from 'src/app/services/goal.service';
import { Quote } from '../../classes/quote/quote';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  goals: Goal[];
  alertService: AlertService;
  quote?: Quote;

  toggleDetails(index: number): void {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: any, index: number): void {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.goals[index].name}?`
      );
      if (toDelete) {
        this.goals.splice(index, 1);
        this.alertService.alertMe('The goal has been deleted successfully');
      }
    }
  }

  addNewGoal(goal: Goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  constructor(
    goalService: GoalService,
    alertService: AlertService,
    private http: HttpClient
  ) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }

  ngOnInit(): void {
    interface ApiResponse {
      author: string;
      quote: string;
    }

    this.http
      .get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json')
      .subscribe({
        next: (data: any) => (this.quote = new Quote(data.author, data.quote)),
        error: (err: any) =>
          (this.quote =
            new Quote('Winston Churchill', 'Never never give up!') ||
            console.log(err)),
      });
  }
}
