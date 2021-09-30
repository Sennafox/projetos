import { NotFoundComponent } from './errors/not-found/not-found.component';
import { browser } from 'protractor';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
