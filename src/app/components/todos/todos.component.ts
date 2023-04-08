import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos !: Todo[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  // tableSizes: any = [3, 6, 9, 12];

  constructor(private todoService: TodoService ) { }

  ngOnInit(): void {
    this.fetchTodos();
  };

  fetchTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchTodos();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchTodos();
  }
}
