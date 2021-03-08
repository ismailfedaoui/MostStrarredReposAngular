import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http/http.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { EndPoints, ApiMethod } from 'src/app/core/services/consts';
import { HelperService } from 'src/app/core/services/helper/helper.service';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(
    private _router: Router,
    private _helper: HelperService,
    private _http: HttpService,
    private _loader: NgxUiLoaderService) { }
    getMostStarred(NumberOfPage) {
      let params:String;
      this._loader.start();
      let now:Date= new Date();
      now.setDate(now.getDate() - 30);
      if(NumberOfPage>1)
        params ="?q=created:"+this._helper.convert(now)+"&sort=stars&order=desc&page="+NumberOfPage;
      else
        params="?q=created:>"+this._helper.convert(now)+"&sort=stars&order=desc";

      //let params ="?q=created:>"+this._helper.convert(now)+"&sort=stars&order=desc";
     // let params ="?q=created:>2017-10-22&sort=stars&order=desc&page=2";
     return this._http.requestCall(EndPoints.Repos, ApiMethod.GET,params);
    }
}
