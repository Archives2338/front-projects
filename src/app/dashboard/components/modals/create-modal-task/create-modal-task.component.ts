import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateProjectTaskComponent } from '../create-project-task/create-project-task.component';
@Component({
  selector: 'app-create-modal-task',
  templateUrl: './create-modal-task.component.html',
  styleUrls: ['./create-modal-task.component.scss']
})
export class CreateModalTaskComponent {
  public formTask : FormGroup = new FormGroup({});
  public projects:any = [];
  constructor(private dialog: MatDialog,private snackBar: MatSnackBar,private fb:FormBuilder,private dialogRef:MatDialogRef<CreateModalTaskComponent>, @Inject(MAT_DIALOG_DATA) value:any , private services:DashboardService) {

    this.formTask = this.fb.group({
      title: ['', [Validators.required]],
      description: ['',[Validators.required]],
      state: [1],
      id_project: ['',[Validators.required]]
    })
    this.getProjects();



  }

  getProjects(){
    this.services.getProjects().subscribe((data)=>{
      this.projects = data;
    })
  }

  saveTask(){
    if (!this.formTask.valid) return this.showSnackBar('Campos invalidos', 'Aceptar');
    this.dialogRef.close(this.formTask.value);
  }





  showSnackBar(message: string, action: string) {

    this.snackBar.open(message, action , {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',

    });
  }

  openModalCreateProject(){
    // Solo tendra un input
    this.dialog.open(CreateProjectTaskComponent, {
      width: '500px',
      minHeight: '200px',
      data: { title: 'Crear proyecto'},
      panelClass: 'custom-modalbox'
    }).afterClosed().subscribe((data)=>{
      if(data){
        // this.getProjects();
        this.projects.push(data);

      }
    })

  }
}
