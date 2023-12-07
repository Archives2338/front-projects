import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { LocalStorageStoreService } from 'src/app/shared/services/local-storage.service';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
  public name_user!: string;
  public type_user!: any;
  constructor(private router:Router, private localStorageService:LocalStorageStoreService) { }
  ngOnInit(): void {
    let infoUser = this.localStorageService.getItem('infoUser');
    console.log("infoUser",infoUser);
    if (infoUser) {
      this.name_user = JSON.parse(infoUser).name;
      this.type_user = JSON.parse(infoUser).id_type_user;
      this.type_user = this.type_user == 1 ? 'Administrador' : 'Consumidor';
    }
    // console.log("name",name);

  }


  logOut(){

    this.localStorageService.removeItem('tokenUser');
    this.localStorageService.removeItem('infoUser');
    this.router.navigate(['/auth/login']);
  }
}
