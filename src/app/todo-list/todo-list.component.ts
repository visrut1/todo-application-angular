import { Component, Input } from '@angular/core';
import { ITodo } from '../ITodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: ITodo[] = [];

  constructor() {}

  deleteTodoInList(todo: ITodo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
