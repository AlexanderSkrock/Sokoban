import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerChangeComponent } from './player-change.component';

describe('PlayerChangeComponent', () => {
  let component: PlayerChangeComponent;
  let fixture: ComponentFixture<PlayerChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
