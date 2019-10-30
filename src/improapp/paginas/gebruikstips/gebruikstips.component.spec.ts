import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikstipsComponent } from './gebruikstips.component';

describe('GebruikstipsComponent', () => {
  let component: GebruikstipsComponent;
  let fixture: ComponentFixture<GebruikstipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikstipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikstipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
