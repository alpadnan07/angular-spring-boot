import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './project/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms"
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
