import { _isNumberValue } from "@angular/cdk/coercion";
import { AbstractControl } from "@angular/forms";


export class MyValidators {


  static validNumber(control : AbstractControl){
    const value = control.value

    if(value){
      if(!containsNumber(value)){

        return {invalid_password:true}
      }else{

        return ''
      }

    }

    return ''

  }


  static validateUpperCase(control : AbstractControl){
    const value = control.value
    // VALIDATE STRING UPPERCASE
    if(value){

      if(!textCaseStats(value)){
        return {invalid_uppercase:true}
      }else{
        return ''
      }

    }
    return ''

  }
  static matchPassword(control: AbstractControl){
    const password = control.get('new_password')?.value
    const confirmNewPassword = control.get('password_confirmation')?.value

    // console.log(password,confirmNewPassword)

    if(password === confirmNewPassword ) {
      console.log('son iguales')
      return null
    }else{
      return {match_password:true}
    }




  }


}

function containsNumber(value:string) {
  return value.split('').find(v=>isNumber(v) )!== undefined
}

function  isNumber(value:string){
  return !isNaN(parseInt(value,10))
}

function textCaseStats(text:string) {

  var m;
  if( !(m = text.match(/[a-z]/g)) ) return false;
  if( !(m = text.match(/[A-Z]/g)) ) return false;
  return true;
}
