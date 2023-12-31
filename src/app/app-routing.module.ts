import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', loadChildren: ()=> import('./home/home.module').then((m)=> m.HomeModule)
  },
  {
    path: 'details', loadChildren: ()=> import('./details/details.module').then((m)=> m.DetailsModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
