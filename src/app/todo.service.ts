import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {todo} from "./entity/todo";
import {todos} from "../todos";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  // constructor(private http: HttpClient) { }

  // private apiUrl = 'http://localhost:8080/api/todos'; // Beispiel-URL der API
  //
  // getTodos() {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  //
  // addTodo(todo: any) {
  //   return this.http.post<any>(this.apiUrl, todo);
  // }
  //
  // updateTodo(todo: any) {
  //   const url = `${this.apiUrl}/${todo.id}`;
  //   return this.http.put<any>(url, todo);
  // }
  //
  // deleteTodo(id: number) {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete<any>(url);
  // }

  getToDos(): todo[] {
    return todos;
  }

  getToDo(id: number): todo {
    return todos.find(h => h.id === id)!;
  }

  getToDoById(id: number): Observable<todo>{
    const todo = todos.find(h => h.id === id)!;
    return of(todo);
  }

  deleteToDoById(id: number){
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  }

  saveTodoToTodos(todo: any) {
    if (todo.id>0) {
      // Wenn das Todo bereits eine ID hat, aktualisiere es in der Liste
      const index = todos.findIndex(existingTodo => existingTodo.id === todo.id);
      if (index !== -1) {
        todos[index] = todo;
      }else{
        todos.push(todo)
      }
    }
  }
  generateUniqueToDoId(): number {
    const highestId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id || 0), 0);
    return highestId + 1;
  }
}
