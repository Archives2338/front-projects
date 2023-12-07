import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectTaskComponent } from './pages/project-task/project-task.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
{
  path:'',
  component: DashboardComponent,

  children:[
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'projects',
      component: ProjectsComponent
    },
    {
      path:'projects/:id',
      component: ProjectTaskComponent

    }
  ]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
