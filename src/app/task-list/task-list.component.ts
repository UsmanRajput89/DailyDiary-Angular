import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tasks:Task[] = [
    new Task("do Breakfast"), 
    new Task("visit friend"), 
    new Task("Go to gym"), 
    new Task("Lunch"),
  ]

  add(newTask:string){
    this.tasks.push(new Task(newTask));
  }

  remove(task:Task){
    // task
    let confrim_Del = confirm(`Are you sure you wanna remove \"${task.title}\"?`); 

    if (confrim_Del) {
      this.tasks = this.tasks.filter(t => t != task )
    }
  }

}

class Task {
  public isDone = false;
  
  constructor(public title:string) { 
  }

  toggleIsDone(){
    this.isDone = !this.isDone;
  }
}