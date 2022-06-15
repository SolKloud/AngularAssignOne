import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent{

  public taskData=[];
  public taskInput='';
  public status='';

  getTaskName(event){
    this.taskInput=event.target.value;
  }

  getStatus(event){
    this.status=event.target.value;
  }



  onAddClick(){
     let obj={
      taskInput:this.taskInput,
      status:this.status
     }
     this.taskData.push(obj);
  }

  onDeleteButton(taskInput){
    let result=this.taskData.filter((TASK)=>TASK.taskInput != taskInput);
    this.taskData=result;
  }

}
