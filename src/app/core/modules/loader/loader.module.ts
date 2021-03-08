import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUiLoaderModule, POSITION, SPINNER, PB_DIRECTION, NgxUiLoaderConfig } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig ={
  "bgsColor": "#3881da",
  "bgsOpacity": 0.9,
  "bgsPosition": "center-center",
  "bgsSize": 130,
  "bgsType": "chasing-dots",
  "blur": 3,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#3881da",
  "fgsPosition": "center-center",
  "fgsSize": 130,
  "fgsType": "wandering-cubes",
  "gap": 63,
  "logoPosition": "center-center",
  "logoSize": 60,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(0,0,0,0.39)",
  "pbColor": "#3881da",
  "pbDirection": "ltr",
  "pbThickness": 6,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#837f7f",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  exports: [NgxUiLoaderModule]
})
export class LoaderModule { }
