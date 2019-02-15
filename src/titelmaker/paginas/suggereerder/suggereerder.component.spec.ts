import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggereerderComponent } from './suggereerder.component';

describe('SuggereerderComponent', () => {
  let component: SuggereerderComponent;
  let fixture: ComponentFixture<SuggereerderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggereerderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggereerderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
