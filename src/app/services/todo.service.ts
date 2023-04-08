import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=96';
  constructor(private http: HttpClient) { }

  //write a method to get todos from the server using the HttpClient and return an observable of type Todo[] mapped to the response and catch any errors
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`)
      .pipe(
        map((response: Todo[]) => {
          return response
        }),
        catchError((error: any) => {
          console.log(error);
          return throwError(error);
        }))
  }

  //write a  method to update todo completion status on the server using the HttpClient and return an observable of type any mapped to the response and catch any errors
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, { responseType: 'text' })
      .pipe(
        map((response: any) => {
          return response
        }),
        catchError((error: any) => {
          console.log(error);
          return throwError(error);
        }))
  }


  //add todo to the server using the HttpClient and return an observable of type Todo mapped to the response and catch any errors
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, { responseType: 'json' })
      .pipe(
        map((response: Todo) => {
          console.log(response);
          return response
        }),
        catchError((error: any) => {
          console.log(error);
          return throwError(error);
        }))
  }


  //delete todo from the server using the HttpClient and return an observable of type any mapped to the response and catch any errors

  deleteTodo (todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete(url, { responseType: 'text' })
      .pipe(
        map((response: any) => {
          return response
        }),
        catchError((error: any) => {
          console.log(error);
          return throwError(error);
        }))
  }
}
