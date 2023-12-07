import { Component,Input, OnInit } from '@angular/core';
import { IProjectResponse } from '../../services/dashboard.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
public columnsTable  = ['ID','Nombre del Proyecto', 'Accion']
public sortProjectsData :  Array<IProjectResponse> = [];
@Input() set projectsData(projectsData: Array<IProjectResponse>) {
  console.log("projectsData",projectsData)
  this.sortProjectsData = projectsData;
}
// TABLA
public group: number = 10;
public search: string = '';
public page!: number;
public size: number = 0;
public filterTable: string = '';


public route (id:number): string
{
  // console.log("id",id)
  const route = `${id}`;
  return route;

}
}
