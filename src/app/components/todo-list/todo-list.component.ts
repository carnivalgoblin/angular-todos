import {Component, OnInit} from '@angular/core';
import {todo} from "../../entity/todo";
import {todos} from "../../../todos";
import { Location } from '@angular/common';
import {TodoService} from "../../todo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  todos: todo[] = todos;


  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.getToDos();
  }


  getToDos(): void {
    this.todoService.getToDos();
  }
}
