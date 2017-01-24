import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { SvcNSpotifyService } from './svc-nspotify.service';

import { AppComponent } from './app.component';
import { CNavbarComponent } from './c-navbar/c-navbar.component';
import { CAboutComponent } from './c-about/c-about.component';
import { CSearchComponent } from './c-search/c-search.component';
import { CArtistComponent } from './c-artist/c-artist.component';
import { CAlbumComponent } from './c-album/c-album.component';

@NgModule({
  declarations: [
    AppComponent,
    CNavbarComponent,
    CAboutComponent,
    CSearchComponent,
    CArtistComponent,
    CAlbumComponent
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
