import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void { }

  //set dynamic Classes
  setClasses() {
    let classes = {
      'is-complete': this.todo.completed,
    };
    return classes;
  }
  
  onToggle(todo: Todo) {
    //toggle in UI
    todo.completed = !todo.completed;
    //toogle in devServerTarget
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }
}
