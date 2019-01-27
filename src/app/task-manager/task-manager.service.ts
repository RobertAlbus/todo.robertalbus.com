import { Injectable } from '@angular/core';
import{ Task } from '../task/task.interface'
import { TaskList } from '../task-list/task-list.component';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  taskList: Task[];
  taskIdCounter: number;
  
  constructor() {
    this.taskIdCounter = 0;
    this.taskList = [];
    this.addTask(new Task("First Task", "nothing before it"));
    this.addTask(new Task("Second Task", "something before it", true))

  }
  addTask(newTask: Task): void {
    newTask.taskId = this.taskIdCounter++;
    this.taskList.push(newTask);
  }
  deleteTask(task: Task) {
    this.taskList = this.taskList.filter( (item: Task) => item != task )
  }
  toggleComplete(inputTask: Task) {
    let modifiedTask = this.taskList.filter(task => task == inputTask)[0]
    this.taskList = this.taskList.filter(task => task != inputTask)
    modifiedTask.completed = !modifiedTask.completed;
    this.taskList.push(modifiedTask);
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
