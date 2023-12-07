import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService, Root } from '../../services/dashboard.service';
import { LocalStorageStoreService } from 'src/app/shared/services/local-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoModalTaskComponent } from '../../components/modals/info-modal-task/info-modal-task.component';
import { CreateModalTaskComponent } from '../../components/modals/create-modal-task/create-modal-task.component';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.scss'],
})
export class ProjectTaskComponent {
  public idProject!: number;
  public projectTaskData: Root | undefined;
  public type_user: number = 0;
  constructor(
    private router: Router,
    private services: DashboardService,
    private localStorageService: LocalStorageStoreService,
    private dialog: MatDialog
  ) {
    // obtenemos el id del proyecto que esta en la url
    this.idProject = parseInt(this.router.url.split('/')[3]);
    console.log('idProject', this.idProject);
  }

  ngOnInit(): void {
    this.getProjectTask();
  }

  getProjectTask() {
    this.services.getProjectTask(this.idProject).subscribe((data) => {
      console.log('data', data);
      if (data.project) {
        this.projectTaskData = data;
      }
    });
  }

  validateUser() {
    let infoUser = this.localStorageService.getItem('infoUser');
    // console.log('infoUser', infoUser);
    if (infoUser) {
      this.type_user = JSON.parse(infoUser).id_type_user;
      // console.log('type_user', this.type_user);
      return this.type_user == 1 ? true : false;
    }
    return false;
  }

  //Modals

  openModalInfoTask(task: any) {
    // console.log('idTask', idTask);
    this.dialog
      .open(InfoModalTaskComponent, {
        data: {
          task,
        },
        width: '500px',
        minHeight: '300px',
        panelClass: 'custom-modalbox',
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          console.log('data', data);
          this.services
            .updateStateTask(data.id_task, data.state)
            .subscribe((data) => {
              if (data) {
                this.getProjectTask();
              }
            });
        }
      });
  }

  openCreateTaskModal() {
    this.dialog
      .open(CreateModalTaskComponent, {
        data: {
          id_project: this.idProject,
        },
        width: '700px',
        minHeight: '500px',
        autoFocus: false,
        panelClass: 'custom-modalbox',
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          console.log('data', data);

          this.services
            .createTask(
              data.title,
              data.description,
              data.id_project,
              data.state
            )
            .subscribe((data) => {
              if (data) {
                this.getProjectTask();
              }
            });
        }
      });
  }
}
