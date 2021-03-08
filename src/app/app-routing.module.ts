import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =
  [
    {
      path: '',
      loadChildren: () => import('src/app/modules/repos/repos.module').then(mod => mod.ReposModule)
    },
    {
      path: '**',
      loadChildren: () => import('src/app/core/modules/404/error404.module').then(mod => mod.Error404Module)
    },
  ];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
