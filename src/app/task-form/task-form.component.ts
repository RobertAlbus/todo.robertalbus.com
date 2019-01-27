import { 
  Component, 
  OnInit, 
  Output, 
  EventEmitter, 
  HostBinding} from '@angular/core';
import {
  FormBuilder, 
  FormGroup, 
  Validators, 
  AbstractControl} from '@angular/forms';
import { Task } from '../task/task.interface';

@Component({
  selector:     'task-form',
  templateUrl:  './task-form.component.html',
  styleUrls:    ['./task-form.component.css']
})
export class TaskForm implements OnInit {

  form: FormGroup;


  @Output() newTask: EventEmitter<Task>;
  @HostBinding('class') classes = 'form-group';

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'name'        : ['', Validators.required],
      'description' : ['',],
      'completed'   : [false, Validators.required]
    })
    this.newTask = new EventEmitter<Task>();
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
      this.newTask.emit(newTask);
      this.clearForm();
  }}

  clearForm() {
    this.form.setValue( {name: '', description: '', completed: false} );
    this.form.markAsUntouched();
  }

  ngOnInit() {
  }

}
