import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-modal-task',
  templateUrl: './info-modal-task.component.html',
  styleUrls: ['./info-modal-task.component.scss']
})
export class InfoModalTaskComponent {
  public pointerState = 0;
  public arrayStates = [
    {
      id: 1,
      name: 'Pendiente',
    },
    {
      id: 2,
      name: 'En proceso',
    },
    {
      id: 3,
      name: 'Finalizado',
    },
  ];
  public task:any
constructor(private dialogRef:MatDialogRef<InfoModalTaskComponent>, @Inject(MAT_DIALOG_DATA) public data:any) {
  this.task = data.task;

  this.pointerState = this.task.state;

}

changeState(state:any){

  this.pointerState = state;
  this.task.state = state;


}
save(){
  this.dialogRef.close(this.task);
}



}
