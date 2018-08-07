import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { FindCarePeopleComponent } from './find-care-people/find-care-people.component';
import { BeCarePeopleComponent } from './be-care-people/be-care-people.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindCarePeopleComponent,
    BeCarePeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
