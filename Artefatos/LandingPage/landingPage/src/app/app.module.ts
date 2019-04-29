import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Land2Component } from './land2/land2.component';
import { Land3Component } from './land3/land3.component';

@NgModule({
  declarations: [
    AppComponent,
    Land2Component,
    Land3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
