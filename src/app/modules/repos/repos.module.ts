import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from 'src/app/core/modules/Material/material.module';
import { ReposComponent } from './repos.component';
import { ReposRoutingModule } from './repos-routing.module';
import { MomentModule } from 'angular2-moment';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [ReposComponent, ListComponent],
  imports: [
    CommonModule,

    MaterialModule,
    ReposRoutingModule,
    MomentModule,
    NgxPaginationModule
  ]
})
export class ReposModule { }
