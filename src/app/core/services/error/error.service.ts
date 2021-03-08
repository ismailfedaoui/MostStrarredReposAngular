import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';

export enum CustomErrorCodes {
  FirstErrorCode = 0
}
export enum ServerErrorCodes {
  HTTP_500_INTERNAL_SERVER_ERROR = 500
}
export enum ClientErrorCodes {
  HTTP_404_NOT_FOUND = 404
}
export enum SuccessCodes {
  HTTP_200_OK = 200
}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private _alert:AlertService) { }
  whichError(errorCode: number, errorMessage: string) {
    switch (errorCode) {
      case CustomErrorCodes.FirstErrorCode:
        {
        this._alert.ErrorAlert(errorMessage)
        break;
        }
      case ServerErrorCodes.HTTP_500_INTERNAL_SERVER_ERROR:
        {
          this._alert.ErrorAlert(errorMessage)
          break;
        }
      case ClientErrorCodes.HTTP_404_NOT_FOUND:
        {
          this._alert.ErrorAlert(errorMessage)
          break;
        }
    }

  }
}
