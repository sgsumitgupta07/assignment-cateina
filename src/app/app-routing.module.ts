import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataPostComponent } from './data-post/data-post.component';
import { DataShowComponent } from './data-show/data-show.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'dataPost' , component:DataPostComponent},
  {path:'dataShow' , component:DataShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
