import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PortfolioRepository } from '../../../domain/repositories/portfolio.repository';
import { PORTFOLIO_FIXTURE } from '../../../testing/portfolio.fixture';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [{ provide: PortfolioRepository, useValue: { get: () => of(PORTFOLIO_FIXTURE) } }],
    }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders every section once the portfolio is loaded', () => {
    const el: HTMLElement = fixture.nativeElement;
    for (const tag of ['app-navbar', 'app-hero', 'app-about', 'app-showreel', 'app-work', 'app-gallery', 'app-journey', 'app-contact']) {
      expect(el.querySelector(tag)).withContext(tag).toBeTruthy();
    }
  });
});
