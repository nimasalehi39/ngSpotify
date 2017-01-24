import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SvcNSpotifyService } from '../svc-nspotify.service';
import { ClArtist } from '../cl-artist';
import { ClAlbum } from '../cl-album';

@Component({
  selector: 'app-c-album',
  templateUrl: './c-album.component.html',
  styleUrls: ['./c-album.component.css']
})
export class CAlbumComponent implements OnInit {

    propAlbumId:number
    propAlbum:ClAlbum[]
  

  constructor(private _spotifyService:SvcNSpotifyService, private _aRoute:ActivatedRoute) { }

  ngOnInit() {
    this._aRoute.params
        .map(params=>params['id'])
        .subscribe(id=>{
          this._spotifyService.fncGetAlbum(id)
          .subscribe(album=>{
            this.propAlbum=album
         console.log(this.propAlbum)
          })
        })
  }

}
