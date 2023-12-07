import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { MyValidators } from 'src/app/utils/Validators';
import { IRegisterRequest, RegisterService } from '../../services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit {
  public formRegister: FormGroup = new FormGroup({});
  // Validacion de campos de formulario
  matcher = new MyErrorStateMatcher();

  constructor(  private snackBar: MatSnackBar,private fb:FormBuilder,private router:Router,private registerService: RegisterService
    ){


      this.formRegister = this.fb.group({
        name: ['',[Validators.required]],
        mail: ['',[Validators.required,Validators.email]],
        new_password: ['',[Validators.required,]],
        password_confirmation: [,[Validators.required]]
      }, {
        validators: MyValidators.matchPassword

      })
    }

  ngOnInit(): void {
   // inicializamos el formulario con el validador de passwords iguales



  }


  register(){
    if(!this.formRegister.valid) return this.showSnackBar('Campos invalidos','Aceptar');
    const { name, mail, new_password } = this.formRegister.value;
    const request : IRegisterRequest = {
      name,
      mail,
      password: new_password,
      id_type_user: "2"

    }
    this.registerService.register(request).subscribe(data=>{
      console.log("data",data);
      if(data.success) {
        this.showSnackBar('Usuario registrado correctamente','Aceptar');
        this.router.navigate(['/auth/login']);
      }else{
        this.showSnackBar( data.message,'Aceptar');
      }
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


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
