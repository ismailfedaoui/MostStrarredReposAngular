import { Component, OnInit } from '@angular/core';
import { ReposService } from '../../services/repos.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HelperService } from 'src/app/core/services/helper/helper.service';
import { ReposObject } from '../../interfaces/repos.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data:ReposObject|undefined;
  now;
  config: any={
    itemsPerPage: 30,
    currentPage: 1,
    totalItems: 1000
  };
  constructor(private _repos:ReposService,private _loader:NgxUiLoaderService,private _helper:HelperService) {


  }
  ngOnInit(): void {

    this._repos.getMostStarred(1).subscribe((data) => {
    this.data=data;
    this.now=new Date();
    this.config.currentPage =1;
    this._loader.stop();
  });
  }
  pageChanged(currentPage){
    this._repos.getMostStarred(currentPage).subscribe((res) => {
      window.scrollTo(0,0);
      this.data=res;
      this.now=new Date();
      this.config.currentPage = currentPage;
      this._loader.stop();
    });
  }
}
