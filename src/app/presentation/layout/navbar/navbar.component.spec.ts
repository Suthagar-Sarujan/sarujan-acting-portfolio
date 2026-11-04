import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PORTFOLIO_FIXTURE } from '../../../testing/portfolio.fixture';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [NavbarComponent] }).compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    fixture.componentRef.setInput('name', 'Test Actor');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders its content', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.logo')?.textContent).toContain('Test Actor');
    expect(el.querySelectorAll('nav a').length).toBe(6);
  });
  it('toggles the mobile menu', () => {
    const c = fixture.componentInstance;
    c.open.set(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('nav').classList).toContain('open');
  });
});
