import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  SucessAlert(message:String){
    Swal.fire({
      icon: 'success',
      title: message,
      text:"Merci d'avoir utilser notre application",
      showConfirmButton: false,
      timer: 3000
    });
  }

  ErrorAlert(message:string){
    Swal.fire({
      icon: 'error',
      title: message,
      text:"Veuillez ressayez plus tard !",
      showConfirmButton: true
    });
  }
}
