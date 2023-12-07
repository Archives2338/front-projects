import { Component } from '@angular/core';
import { DashboardService, IProjectResponse } from '../../services/dashboard.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(private projectsServices:DashboardService) { }
  public projectsData: Array<IProjectResponse> = [];

  ngOnInit(): void {
    this.projectsServices.getProjects().subscribe(data=>{
      console.log("data",data);
      this.projectsData = data;
    })
  }

}
