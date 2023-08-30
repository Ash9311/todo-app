import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  constructor(private http:HttpClient) { }

  newTask:string="";
  tasks:any[] =[];

  ngOnInit(): void {
  }

  addTask(){
    if(this.newTask.trim()){
      this.http.post('http://localhost:3000/tasks',{name: this.newTask}).subscribe(
        (response)=>{
          this.newTask = '';
          
        },
        (error)=>{
          console.error('error adding tasks',error);
        }
      )
    }
  }
}
