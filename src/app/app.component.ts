import { Component } from '@angular/core';
import { ITodo } from './ITodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: ITodo[];
  count: number = 0;
  constructor() {
    this.todos = [];
  }

  addTodoHandler(todo: ITodo) {
    this.count += 1;
    todo.id = this.count;
    this.todos.push(todo);
    console.log(this.todos);
  }
}
