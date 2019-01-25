import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TaskList } from './task-list/task-list.component';
import { TaskForm } from './task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskList,
    TaskForm
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
