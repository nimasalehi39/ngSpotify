/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CArtistComponent } from './c-artist.component';

describe('CArtistComponent', () => {
  let component: CArtistComponent;
  let fixture: ComponentFixture<CArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
