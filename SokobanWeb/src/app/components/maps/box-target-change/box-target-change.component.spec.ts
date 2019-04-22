import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTargetChangeComponent } from './box-target-change.component';

describe('BoxTargetChangeComponent', () => {
  let component: BoxTargetChangeComponent;
  let fixture: ComponentFixture<BoxTargetChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxTargetChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTargetChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
