import {Component, Input, OnInit} from '@angular/core';
import {todo} from '../../entity/todo'
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {TodoService} from "../../services/todo.service";
import {delay} from "rxjs";

@Component({
  selector: 'todo',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit{

  @Input() todo:todo = new todo(0, "", false);

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getToDo();
  }

  getToDo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodoByID(id)
      .subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back()
  }


  delete(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => console.log("Todo deleted"));
    setTimeout(() => {
      this.router.navigateByUrl("/todolist")
    }, 500);
  }
}
