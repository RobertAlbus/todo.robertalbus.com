import { Component, OnInit, EventEmitter, Output, inject, Input, Inject, HostListener, HostBinding } from '@angular/core';

import { Task } from './task.interface';
import { TaskManagerService } from '../services/task-manager.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  taskManager: TaskManagerService;

  constructor(@Inject(TaskManagerService) taskManager) {
    this.taskManager = taskManager;
  }

  toggleComplete() {
    this.taskManager.toggleComplete(this.task);
  }
  delete() {
    this.taskManager.deleteTask(this.task);
  }
  @HostListener('click') onclick() {
    this.toggleComplete();
  }
  ngOnInit() {
  }
}
