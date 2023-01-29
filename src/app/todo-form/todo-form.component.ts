import { Component, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../ITodo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todo_title: string = '';
  @Output() todoAddEmitter: EventEmitter<ITodo> = new EventEmitter();
  constructor() {}

  onSubmit() {
    this.todoAddEmitter.emit({
      id: 1,
      title: this.todo_title,
      isCompleted: false,
    });
    this.todo_title = '';
  }
}
