import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentformComponent } from './studentform/studentform.component';
import { StudentformlistComponent } from './studentformlist/studentformlist.component';


@NgModule({
  declarations: [
    AppComponent,
 
    StudentformComponent,
    StudentformlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
