import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindCarePeopleComponent } from './find-care-people/find-care-people.component';
import { BeCarePeopleComponent } from './be-care-people/be-care-people.component';

const routes: Routes = [
  {
    path: 'find',
    component: HomeComponent,
    resolve: {
    },
    canActivate: [],
    children: []
  },
  {
    path: 'become',
    component: HomeComponent,
    resolve: {
    },
    canActivate: [],
    children: []
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
