import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHelpTextComponent } from './simple-help-text.component';

describe('SimpleHelpTextComponent', () => {
  let component: SimpleHelpTextComponent;
  let fixture: ComponentFixture<SimpleHelpTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleHelpTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHelpTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
