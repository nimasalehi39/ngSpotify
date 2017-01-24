import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map' 

@Injectable()
export class SvcNSpotifyService {

  private _propSearchUrl: string

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

}
