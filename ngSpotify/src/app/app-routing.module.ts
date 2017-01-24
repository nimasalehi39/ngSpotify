import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CAboutComponent } from './c-about/c-about.component';
import { CSearchComponent } from './c-search/c-search.component';
import { SvcNSpotifyService } from './svc-nspotify.service';

const routes: Routes = [
  // {
  {path: 'about',component:CAboutComponent},
  {path: '',component:CSearchComponent},
    // children: []
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SvcNSpotifyService]
})
export class AppRoutingModule { }
