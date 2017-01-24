import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map' 

@Injectable()
export class SvcNSpotifyService {

  private _propSearchUrl: string
  private _propArtistUrl: string
  private _propAlbumsUrl: string
  private _propAlbumUrl: string

  constructor(private _propHttp: Http) {

  }

  fncSearchArtists(propSearchedStrng:string){
    this._propSearchUrl='https://api.spotify.com/v1/search?q='+propSearchedStrng+'&type=artist'
    
    return this._propHttp.get(
      this._propSearchUrl
    ).map(
      res =>res.json()
    )
  }

  fncGetArtist(propArtistId:string){
    this._propArtistUrl='https://api.spotify.com/v1/artists/'+propArtistId

    return this._propHttp.get(
      this._propArtistUrl
    ).map(
      res =>res.json()
    )
  }

  fncGetArtistAlbums(propArtistId:string){
    this._propAlbumsUrl='https://api.spotify.com/v1/artists/'+propArtistId+'/albums'

    return this._propHttp.get(
      this._propAlbumsUrl
    ).map(
      res =>res.json()
    )
  }

  fncGetAlbum(propAlbumId:string){
    this._propAlbumUrl='https://api.spotify.com/v1/albums/'+propAlbumId

    return this._propHttp.get(
      this._propAlbumUrl
    ).map(
      res =>res.json()
    )
  }

}
