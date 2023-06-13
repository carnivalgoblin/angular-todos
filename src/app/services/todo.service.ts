import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {todo} from "../entity/todo";
import {todos} from "../../todos";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // constructor() { }
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/todos';

  getTodos() {
    const headers = this.createHeaders();
    return this.http.get<todo[]>(this.apiUrl, { headers });
  }

  getTodoByID(id: number) {
    const url = `${this.apiUrl}/${id}`;
    const headers = this.createHeaders();
    return this.http.get<todo>(url, { headers });
  }

  addTodo(todo: any) {
    const headers = this.createHeaders();
    return this.http.post<todo>(this.apiUrl, todo, { headers });
  }

  updateTodo(todo: any) {
    const url = `${this.apiUrl}`;
    const headers = this.createHeaders();
    return this.http.put<todo>(url, todo, { headers });
  }

  deleteTodo(id: number) {
    const url = `${this.apiUrl}/${id}`;
    const headers = this.createHeaders();
    return this.http.delete(url, { headers });
  }

  private createHeaders() {
    const username = 'admin';
    const password = 'adminPassword';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
  }

  // getToDos(): todo[] {
  //   return todos;
  // }
  //
  // getToDo(id: number): todo {
  //   return todos.find(h => h.id === id)!;
  // }
  //
  // getToDoById(id: number): Observable<todo>{
  //   const todo = todos.find(h => h.id === id)!;
  //   return of(todo);
  // }
  //
  // deleteToDoById(id: number){
  //   const index = todos.findIndex(todo => todo.id === id);
  //   if (index !== -1) {
  //     todos.splice(index, 1);
  //   }
  // }
  //
  // saveTodoToTodos(todo: any) {
  //   if (todo.id>0) {
  //     // Wenn das Todo bereits eine ID hat, aktualisiere es in der Liste
  //     const index = todos.findIndex(existingTodo => existingTodo.id === todo.id);
  //     if (index !== -1) {
  //       todos[index] = todo;
  //     }else{
  //       todos.push(todo)
  //     }
  //   }
  // }
  //
  // generateUniqueToDoId(): number {
  //   const highestId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id || 0), 0);
  //   return highestId + 1;
  // }
}
