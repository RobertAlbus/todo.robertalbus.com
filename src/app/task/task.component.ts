import { Component, OnInit, EventEmitter, Output, inject, Input } from '@angular/core';

import { Task } from './task.interface'

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements Task, OnInit {

  @Input() task: Task;
  name: string;
  description: string
  completed: boolean;
  taskId: number;
  @Output() requestDelete: EventEmitter<Task>

  public toggleComplete(): this {
      this.completed = !this.completed;
      return this;
  }
  constructor() {
      this.requestDelete = new EventEmitter<Task>();
  }
  deleteTask(){
    this.requestDelete.emit(this)
  }
  ngOnInit() {
    this.name = this.task.name;
    this.description = this.task.description
    this.completed = this.task.completed
    this.taskId = this.task.taskId;
  }
}
