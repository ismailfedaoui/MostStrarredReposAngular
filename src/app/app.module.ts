import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './core/modules/Material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderModule } from './core/modules/loader/loader.module';
import { ReposModule } from './modules/repos/repos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    LoaderModule,
    ReposModule
  ],
  providers: [
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
