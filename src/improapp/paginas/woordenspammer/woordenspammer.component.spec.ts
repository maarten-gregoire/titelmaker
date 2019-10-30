import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoordenspammerComponent } from './woordenspammer.component';

describe('WoordenspammerComponent', () => {
  let component: WoordenspammerComponent;
  let fixture: ComponentFixture<WoordenspammerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoordenspammerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoordenspammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
