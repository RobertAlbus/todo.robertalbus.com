import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TaskList } from './task-list/task-list.component';
import { TaskForm } from './task-form/task-form.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskList,
    TaskForm,
    TaskManagerComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
