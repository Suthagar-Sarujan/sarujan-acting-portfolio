import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PORTFOLIO_FIXTURE } from '../../../testing/portfolio.fixture';
import { HeroSection } from './hero.section';

describe('HeroSection', () => {
  let fixture: ComponentFixture<HeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HeroSection] }).compileComponents();
    fixture = TestBed.createComponent(HeroSection);
    fixture.componentRef.setInput('data', PORTFOLIO_FIXTURE);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders its content', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h1')?.textContent).toContain('Test Actor');
    expect(el.querySelector('.tagline')?.textContent).toContain('A tagline');
  });
});
