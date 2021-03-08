import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes =
  [
    {
      path: '',
      component: ReposComponent,
      children: [
        {
          path: 'StarredRepos',
          component: ListComponent
        },
        {
          path:'',
          redirectTo:'/StarredRepos',
          pathMatch:'full'
        }
      ]
    }

  ];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReposRoutingModule { }
