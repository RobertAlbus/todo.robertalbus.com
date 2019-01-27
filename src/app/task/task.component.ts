import { Component, OnInit } from '@angular/core';
import { Task } from './task.interface'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements Task {

  public name: string;
  public description: string
  public completed: boolean;
  public taskId: number;

  public toggleComplete(): this {
      this.completed = !this.completed;
      return this;
  }
  constructor(task: Task ) {
      this.name         = task.name;
      this.description  = task.description;
      this.completed    = task.completed;
  }
}
