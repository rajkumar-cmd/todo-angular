import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  text="";
  @Output() childEvent:EventEmitter<any>=new EventEmitter();
  submit(){
    this.childEvent.emit(this.text);
  }
}
