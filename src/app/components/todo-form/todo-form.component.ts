import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import {todo} from "../../entity/todo";
import {ActivatedRoute} from "@angular/router";
import {todos} from "../../../todos";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo:todo={title:"", id:this.todoService.generateUniqueToDoId(), status:false};

  constructor(
      private todoService: TodoService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.checkEdit()
  }
  onSubmit() {
    this.todoService.saveTodoToTodos(this.todo);

    this.todo={title:"", id:0, status:false};
  }

  checkEdit(){
    let id = Number(this.route.snapshot.paramMap.get('id'))
    if (this.route.snapshot.url.join('/') === 'todo/' + id + '/edit') {
      this.todoService.getToDoById(id)
        .subscribe(todo => this.todo = todo);
    }
  }
}
