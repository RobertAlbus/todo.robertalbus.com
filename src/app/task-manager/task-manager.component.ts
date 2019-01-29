import { Component, OnInit, Inject } from '@angular/core';
import { TaskManagerService } from '../services/task-manager.service';

@Component({
  selector: 'task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  TaskManager: TaskManagerService;
  constructor(@Inject(TaskManagerService) taskManager) {
    this.TaskManager = taskManager;
  }
  ngOnInit() {}

}
