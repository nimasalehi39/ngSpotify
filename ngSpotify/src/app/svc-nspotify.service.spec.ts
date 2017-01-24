/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SvcNSpotifyService } from './svc-nspotify.service';

describe('SvcNSpotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvcNSpotifyService]
    });
  });

  it('should ...', inject([SvcNSpotifyService], (service: SvcNSpotifyService) => {
    expect(service).toBeTruthy();
  }));
});
