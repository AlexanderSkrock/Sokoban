import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxChangeComponent } from './box-change.component';

describe('BoxChangeComponent', () => {
  let component: BoxChangeComponent;
  let fixture: ComponentFixture<BoxChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
