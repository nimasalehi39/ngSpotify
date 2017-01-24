import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CNavbarComponent } from './c-navbar/c-navbar.component';
import { CAboutComponent } from './c-about/c-about.component';
import { CSearchComponent } from './c-search/c-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CNavbarComponent,
    CAboutComponent,
    CSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
