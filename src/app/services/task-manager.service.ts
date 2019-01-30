import { Injectable, OnInit } from '@angular/core';
import { Task } from '../task/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService implements OnInit{
  taskList: Task[] = [];

  constructor() {
    if (localStorage['taskList'] == undefined ) { this.defaultTasks() }
    else { this.taskList = JSON.parse(localStorage['taskList']); }
  }
  addTask(newTask: Task): void {
    this.taskList.push(newTask);
    localStorage.setItem('taskList', JSON.stringify(this.taskList))
  }
  deleteTask(task: Task) {
    this.taskList = this.taskList.filter( (item: Task) => item !== task );
    if (this.taskList.length == 0) {delete localStorage['taskList']}
    else { localStorage.setItem('taskList', JSON.stringify(this.taskList)) };
  }
  toggleComplete(inputTask: Task) {
    const modifiedTask = this.taskList.filter(task => task === inputTask)[0];
    this.taskList = this.taskList.filter(task => task !== inputTask);
    modifiedTask.completed = !modifiedTask.completed;
    this.taskList.push(modifiedTask);
    localStorage.setItem('taskList', JSON.stringify(this.taskList))
  }
  completeTasks(): Task[] {
    return this.taskList.filter( task => task.completed);
  }
  incompleteTasks(): Task[] {
    return this.taskList.filter( task => !task.completed);
  }
  ngOnInit() {}

  defaultTasks() {
    this.addTask(new Task( "Implement persistence mechanism", "Use localStroage in conjunction with taskManagerService to restore previous tasks or provide default tasks", true));
    this.addTask(new Task( "Complete this task", "Click on this task to move it to the other side")) 
    this.addTask(new Task( "Improve Validation", "Show error for invalid form", true))
    this.addTask(new Task( "Implement form clearing", "Reset the form inputs and error-status on a valid submit action", true))
    this.addTask(new Task( "Create new-task form", "Form for new tasks with name, description, and checkbox for complete-status", true));
    this.addTask(new Task( "Create delete button", "taskList.filter(task => task != this.task)", true));
    this.addTask(new Task( "Clean up css", "Mobile responsive", true));
  }
}