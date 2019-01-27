import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task.interface'

@Component({
  selector: 'task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  taskList: Task[];
  taskIdCounter: number;
  
  constructor() {
    this.taskIdCounter = 0;
    this.taskList = [
      new Task("First Task", "nothing before it"),
      new Task("second Task", "something before it", true)
    ];
  }
  newTask(newTask: Task): void {
    newTask.taskId = this.taskIdCounter++;
    this.taskList.push(newTask);
  }
  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter( task => task.taskId != taskId )
  }
  completeTasks(): Task[] {
    return this.taskList.filter( task => task.completed);
  }
  incompleteTasks(): Task[] {
    return this.taskList.filter( task => !task.completed)
  }

  ngOnInit() {
  }

}
