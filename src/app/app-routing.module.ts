import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './components/to-do/to-do.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {TodoFormComponent} from "./components/todo-form/todo-form.component";

const routes: Routes = [
  { path: 'todolist', component: TodoListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'createtodo', component: TodoFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'todo/:id', component: ToDoComponent },
  { path: 'todo/:id/edit', component: TodoFormComponent },
  { path: '*', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
