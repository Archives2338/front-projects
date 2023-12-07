import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-project-task',
  templateUrl: './create-project-task.component.html',
  styleUrls: ['./create-project-task.component.scss']
})
export class CreateProjectTaskComponent {
  public formProject :FormGroup = new FormGroup({});

  constructor(private snackBar: MatSnackBar,private fb: FormBuilder,private dialogRef:MatDialogRef<CreateProjectTaskComponent>, @Inject(MAT_DIALOG_DATA) value:any , private services:DashboardService,)

  {

    this.formProject = this.fb.group({
      name_project: ['', [Validators.required,Validators.minLength(3)]],
    })


   }

   saveProject(){
    if (!this.formProject.valid) return this.showSnackBar('Campos invalidos', 'Aceptar');

    this.services.createProject(this.formProject.value.name_project).subscribe((data)=>{
      console.log("data",data);
      if(data.success) {
        this.dialogRef.close({
          name_project: this.formProject.value.name_project,
          id_project: data.id_project
        });
      }else{
        this.showSnackBar( 'Error en la creacion','Aceptar');
      }

    }
    )

    // this.dialogRef.close(this.formProject.value);
   }
   showSnackBar(message: string, action: string) {

    this.snackBar.open(message, action , {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',

    });
  }

}
