import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkGeneratorComponent } from './bulk-generator.component';

describe('BulkGeneratorComponent', () => {
  let component: BulkGeneratorComponent;
  let fixture: ComponentFixture<BulkGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
