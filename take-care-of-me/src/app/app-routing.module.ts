import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindCarePeopleComponent } from './find-care-people/find-care-people.component';
import { BeCarePeopleComponent } from './be-care-people/be-care-people.component';

const routes: Routes = [
  {
    path: 'find',
    component: FindCarePeopleComponent,
    resolve: {
    },
    children: []
  },
  {
    path: 'be',
    component: BeCarePeopleComponent,
    resolve: {
    },
    children: []
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
