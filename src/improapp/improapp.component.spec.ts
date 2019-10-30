import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImproappComponent } from './improapp.component';

describe('TitelmakerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ImproappComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ImproappComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'titelmaker'`, () => {
    const fixture = TestBed.createComponent(ImproappComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('titelmaker');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ImproappComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to titelmaker!');
  });
});
