import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map,catchError,of } from 'rxjs'
import { environment } from 'src/app/shared/parameters';

export interface IRegisterResponse{
  message:string
  success : boolean
}
export interface IRegisterRequest{
  name : string,
  mail : string,
  password : string
  id_type_user : string
}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  urlApi = environment.url_api;

  constructor(
    private http: HttpClient
  ) { }

  register(object:IRegisterRequest) {
    return this.http.post<IRegisterResponse>(`${this.urlApi}/auth/register`, object)
      .pipe(
        map((data: IRegisterResponse) => data ),
        catchError((err: HttpErrorResponse) => {
            console.log(err)
            return of({message:err.error.message,success:false} as IRegisterResponse)
          }
        )
      )
  }
}
