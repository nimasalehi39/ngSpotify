import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SvcNSpotifyService } from '../svc-nspotify.service';
import { ClArtist } from '../cl-artist';
import { ClAlbum } from '../cl-album';

@Component({
  selector: 'app-c-artist',
  templateUrl: './c-artist.component.html',
  styleUrls: ['./c-artist.component.css']
})
export class CArtistComponent implements OnInit {

    propArtistId:number
    propArtist:ClArtist[]
    propArtistGenres:string
    propArtistAlbums: ClAlbum[]

  constructor( private _spotifyService:SvcNSpotifyService, private _aRoute:ActivatedRoute ) { 

               }

  ngOnInit() {
    this._aRoute.params
        .map(params=>params['id'])
        .subscribe(id=>{
          this._spotifyService.fncGetArtist(id)
          .subscribe(artist=>{
            this.propArtist=artist
          })
           this._spotifyService.fncGetArtistAlbums(id)
          .subscribe(albums=>{
            this.propArtistAlbums=albums.items
                            console.log(this.propArtistAlbums)

          })
        })
  }


}
