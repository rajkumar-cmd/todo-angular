import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo:Todo[]=[];
  @Output() childEvent:EventEmitter<any>=new EventEmitter();
  checkboxChanged(value:number){
    this.childEvent.emit(value);
  }
}
