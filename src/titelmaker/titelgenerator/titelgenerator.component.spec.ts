import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitelgeneratorComponent } from './titelgenerator.component';

describe('TitelgeneratorComponent', () => {
  let component: TitelgeneratorComponent;
  let fixture: ComponentFixture<TitelgeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitelgeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitelgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
