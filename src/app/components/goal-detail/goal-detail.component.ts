import { Component, OnInit, Input } from '@angular/core';
import { Goal } from 'src/app/classes/goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss'],
})
export class GoalDetailComponent implements OnInit {
  @Input() goal!: Goal;

  constructor() {}

  ngOnInit(): void {}
}
