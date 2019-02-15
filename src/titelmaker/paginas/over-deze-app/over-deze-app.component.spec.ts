import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverDezeAppComponent } from './over-deze-app.component';

describe('OverDezeAppComponent', () => {
  let component: OverDezeAppComponent;
  let fixture: ComponentFixture<OverDezeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverDezeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverDezeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
