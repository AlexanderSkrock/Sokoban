import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileChangeComponent } from './tile-change.component';

describe('TileChangeComponent', () => {
  let component: TileChangeComponent;
  let fixture: ComponentFixture<TileChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
