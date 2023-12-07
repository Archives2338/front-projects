import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LocalStorageStoreService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formCreate: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private loginService: LoginService,
    private localStorage: LocalStorageStoreService,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.formCreate = this.fb.group({
      mail_account: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]]
    })
  }

  login(){
    if(!this.formCreate.valid) return this.showSnackBar('Campos invalidos','Aceptar');
    const { mail_account, password } = this.formCreate.value;
    this.loginService.login(mail_account, password).subscribe(data=>{
      const {token} = data
      const {id_type_user,name} = data
      if(!token) return this.showSnackBar('Credenciales incorrectas','Aceptar');
      this.localStorage.setItem('tokenUser', token);
      this.localStorage.setItem('infoUser',  JSON.stringify({id_type_user,name}));
      this.router.navigate(['/dashboard/home']);
    })
  }



  showSnackBar(message: string, action: string) {

    this.snackBar.open(message, action , {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',

    });
  }
}
