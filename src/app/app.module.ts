import { MaterialModules } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeHotelComponent } from './home-hotel/home-hotel.component';
import { TabestComponent } from './tabest/tabest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeHotelComponent,
    TabestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
