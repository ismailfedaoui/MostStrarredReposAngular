import { Injectable } from '@angular/core';
import { ApiMethod, EndPoints } from '../consts';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';
import { environment } from 'src/environments/environment';
import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(
    private _http: HttpClient,
    private _error: ErrorService) {
  }
  requestCall(api: EndPoints, method: ApiMethod, data?: any): Observable<any> {
    let response;
    switch (method) {
      case ApiMethod.GET:{
        let url;
        if(isNullOrUndefined(data)){
          url=environment.ApiUrl + api;
        }
        else{
          url=environment.ApiUrl+api+data;
        }
        response = this._http.get(url)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;}
      case ApiMethod.POST:
        response = this._http.post<any>(environment.ApiUrl + api, data)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.PUT:
        response = this._http.put<any>(environment.ApiUrl + api, data)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.DELETE:
        response = this._http.delete<any>(environment.ApiUrl + api + data)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
    }
    return response;
  }
  handleError(error: HttpErrorResponse, self) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred', error.error.message)
    }
    else {
      this._error.whichError(error.status, error.message);
      return throwError({ error: error.message, status: error.status })
    }
  }
}
