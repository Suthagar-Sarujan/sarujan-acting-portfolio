import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { App } from './app';
import { PortfolioRepository } from './domain/repositories/portfolio.repository';
import { PORTFOLIO_FIXTURE } from './testing/portfolio.fixture';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [{ provide: PortfolioRepository, useValue: { get: () => of(PORTFOLIO_FIXTURE) } }],
    }).compileComponents();
  });

  it('should create the app', () => {
    expect(TestBed.createComponent(App).componentInstance).toBeTruthy();
  });

  it('renders the actor name', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Test Actor');
  });
});
