import { Component, OnInit } from '@angular/core';
import { SvcNSpotifyService } from '../svc-nspotify.service';
import { ClArtist } from '../cl-artist';

@Component({
  selector: 'app-c-search',
  templateUrl: './c-search.component.html',
  styleUrls: ['./c-search.component.css']
})
export class CSearchComponent implements OnInit {

  propSearchedStrng:string
  propSearchResults:ClArtist[]

  constructor(private _propNSpotify:SvcNSpotifyService) {

  }

  ngOnInit() {
  }

  fncSearchArtists(){
    console.log(this.propSearchedStrng)

    this._propNSpotify.fncSearchArtists(this.propSearchedStrng)
        .subscribe(
          res=>{
                  console.log(res.artists.items)
          }
        )


    this._propNSpotify.fncSearchArtists(this.propSearchedStrng)
        .subscribe(
          res=>{
                  this.propSearchResults=res.artists.items
          }
        )

        
  }

}
