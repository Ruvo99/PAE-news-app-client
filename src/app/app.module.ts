import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './pages/news/news.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { Page404Component } from './pages/page404/page404.component';
import { HeadlinesComponent } from './pages/headlines/headlines.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CommentsComponent,
    Page404Component,
    HeadlinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
