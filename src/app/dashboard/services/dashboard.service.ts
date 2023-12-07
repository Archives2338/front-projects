import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map,catchError,of } from 'rxjs'
import { environment } from 'src/app/shared/parameters';

export interface IProjectResponse {
  id_project : number,
  name_project : string,
}
export interface Root {
  project: Project
}

export interface Project {
  id_project: number
  name_project: string
  toDo: any[]
  doing: Doing[]
  done: Done[]
}

export interface Doing {
  id_task: number
  title: string
  description: string
  state: number
  id_project: number
}

export interface Done {
  id_task: number
  title: string
  description: string
  state: number
  id_project: number
}

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  urlApi = environment.url_api;
  token = localStorage.getItem('tokenUser') ?? '';
  header ={
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
     Authorization : `Bearer ${this.token}`
  }


  constructor(private http:HttpClient) { }


  getProjects() {
    return this.http.get<IProjectResponse[]>(`${this.urlApi}/dashboard/projects`,{headers:this.header})
      .pipe(
        map((data: any) => data.projects ),
        catchError((err: HttpErrorResponse) => {
            console.log(err)
            return of({} as IProjectResponse[])
          }
        )
      )
  }

  getProjectTask(idProject:number) {
    return this.http.get<Root>(`${this.urlApi}/dashboard/project/${idProject}`,{headers:this.header})
      .pipe(
        map((data: Root) => data ),
        catchError((err: HttpErrorResponse) => {
            console.log(err)
            return of({} as Root)
          }
        )
      )
  }

  updateStateTask(idTask:number, state:number) {

    return this.http.post(`${this.urlApi}/dashboard/update-state-task`,
    { id_task : idTask, state}
    ,{headers:this.header})
      .pipe(
        map((data: any) => data ),
        catchError((err: HttpErrorResponse) => {
            console.log(err)
            return of({} as Root)
          }
        )
      )
  }

  createTask( title:string, description:string, id_project:number,state:1) {
    return this.http.post(`${this.urlApi}/dashboard/create-task`,
    { title, description, id_project,state}
    ,{headers:this.header})
      .pipe(
        map((data: any) => data ),
        catchError((err: HttpErrorResponse) => {
            console.log(err)
            return of({} as Root)
          }

        )

      )

  }


  createProject(name_project:string) {
    return this.http.post(`${this.urlApi}/dashboard/create-project`,
    { name_project}
    ,{headers:this.header})
      .pipe(
        map((data: any) => data ),
        catchError((err: HttpErrorResponse) => {
            console.log(err)
            return of({} as Root)
          }

        )

      )

  }

}
