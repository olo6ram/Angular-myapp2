import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { MyComp2Component } from './my-comp2/my-comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    MyComp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
