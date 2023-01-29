import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../ITodo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: ITodo = {id: 1, title: "", isCompleted: false};
  @Output() todoDeleteEmitter: EventEmitter<ITodo> = new EventEmitter();

  deleteTodo(todo: ITodo) {
    this.todoDeleteEmitter.emit(todo);
  }
}
