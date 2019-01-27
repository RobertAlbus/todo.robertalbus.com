import { 
  Component, 
  OnInit, 
  Output, 
  EventEmitter, 
  HostBinding,
  Inject} from '@angular/core';
import {
  FormBuilder, 
  FormGroup, 
  Validators, 
  AbstractControl} from '@angular/forms';
import { Task } from '../task/task.interface';
import { TaskManagerService } from '../task-manager/task-manager.service';

@Component({
  selector:     'task-form',
  templateUrl:  './task-form.component.html',
  styleUrls:    ['./task-form.component.css']
})
export class TaskForm implements OnInit {

  form: FormGroup;
  TaskManager: TaskManagerService;
  @HostBinding('class') classes = 'form-group';

  constructor(@Inject(TaskManagerService) TaskManager, fb: FormBuilder) {
    this.TaskManager = TaskManager;
    this.form = fb.group({
      'name'        : ['', Validators.required],
      'description' : ['',],
      'completed'   : [false, Validators.required]
    })
  }

  onSubmit(form: FormGroup) {
    //to display an error when submit button pressed but title is (empty && !touched)
    //because error display relies on name.touched
    this.form.controls.name.markAsTouched();

    if (form['name'] != '') {
      let newTask = new Task("","")

      newTask.name        = form['name'];
      newTask.description = form['description'];
      newTask.completed   = form['completed'];
      console.log(newTask);
      this.TaskManager.addTask(newTask);
      this.clearForm();
  }}

  clearForm() {
    this.form.setValue( {name: '', description: '', completed: false} );
    this.form.markAsUntouched();
  }

  ngOnInit() {
  }

}
