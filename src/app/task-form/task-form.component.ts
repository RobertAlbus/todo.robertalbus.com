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
import { Task } from '../task.interface';

@Component({
  selector:     'task-form',
  templateUrl:  './task-form.component.html',
  styleUrls:    ['./task-form.component.css']
})
export class TaskForm implements OnInit {

  form: FormGroup;
  name: AbstractControl;
  description: AbstractControl;
  completed: AbstractControl;

  @Output() newTask: EventEmitter<Task>;
  @HostBinding('class') classes = 'form-group';

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'name'        : ['', Validators.required],
      'description' : ['',],
      'completed'   : [false, Validators.required]
    })

    // this.name = this.form.controls['name'];
    // this.description = this.form.controls['description'];
    // this.completed = this.form.controls['completed'];
    this.newTask = new EventEmitter<Task>();
  }

  onSubmit(form: FormGroup) {

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
