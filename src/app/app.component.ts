import { Component } from '@angular/core';
import { Todo } from './Todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo Project';
  todoValue:Todo[]=[];
  track:number=1;
  getFormData(value:string){
    this.todoValue.push({
      sNo:this.track,
      todoText:value,
      isComplete:false
    });
    console.log(value);
    this.track++;
  }
  checkboxChanged(value:number){
    for(let i=0;i<this.todoValue.length;i++){
      if(this.todoValue[i].sNo==value){
        if(this.todoValue[i].isComplete==true){
          this.todoValue[i].isComplete=false;
        }
        else{
          this.todoValue[i].isComplete=true;
        }
      }
    }
  }
}
