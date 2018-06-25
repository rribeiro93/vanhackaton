import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppService } from './app.service';
import { AddressFilter } from './app.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressFilter
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
