import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { loginbtnComponent } from "./loginbtn/loginbtn.component";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    loginbtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
