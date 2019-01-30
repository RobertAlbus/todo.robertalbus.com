import { Component, OnInit, Input, Inject } from '@angular/core';
import { Task } from '../task/task.interface';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskList implements OnInit {

  @Input() taskList: Task[];
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
