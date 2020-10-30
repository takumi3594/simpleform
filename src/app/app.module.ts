import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { HelloComponent } from './hello/hello.component';
import { OmikujiComponent } from './omikuji/omikuji.component';
import { AwordComponent } from './aword/aword.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    TodoListComponent,
    TodosListComponent,
    HelloComponent,
    OmikujiComponent,
    AwordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
