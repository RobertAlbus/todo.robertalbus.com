import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.interface';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskList implements OnInit {

  @Input() taskList: Task[];
  taskIdCounter: number;

  
  constructor() {
    this.taskIdCounter = 0;
    this.taskList = [];
  }
  deleteTask(task: Task): boolean {
    this.taskList = this.taskList.filter(t => t.taskId != task.taskId);
    return false;
  }
  clearTasks() {
    this.taskList = []
  }
  addTask(task: Task) {
    if (task.name === "CLEARALL") {this.clearTasks(); return;};
    task.taskId = this.taskIdCounter++;
    this.taskList.push(task);
  }

  ngOnInit() {
    this.addTask(new Task( "Complete this task", "Click on this task to move it to the other side"))
    this.addTask(new Task( "Uncomplete this task", "Click on this task to move it to the other side", true));    
    this.addTask(new Task( "Improve Validation", "Show error messages for invalid form", true))
    this.addTask(new Task( "Implement form clearing", "Reset the form inputs and touched-status on a valid submit action", true))
    this.addTask(new Task( "Populate lists", "Use one-way databinding to populate lists. *ngIf(task.completed) for sorting to each list.", true));
    this.addTask(new Task( "Create new-task form", "Form for new tasks with name, description, and checkbox for complete-status", true));
    this.addTask(new Task( "Create delete button", "Update task list to include everything except the current task (filter by taskId)", true));
    this.addTask(new Task( "Clean up css", "make list scrollable without losing title", true));
    this.addTask(new Task( "Modify css", "Make somewhat mobile responsive",true ));
    this.addTask(new Task( "Implement persistence mechanism", ""));
  }

}
