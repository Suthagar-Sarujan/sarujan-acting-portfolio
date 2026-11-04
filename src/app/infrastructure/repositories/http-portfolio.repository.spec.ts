import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { PORTFOLIO_FIXTURE } from '../../testing/portfolio.fixture';
import { HttpPortfolioRepository } from './http-portfolio.repository';

describe('HttpPortfolioRepository', () => {
  it('loads data/portfolio.json', () => {
    TestBed.configureTestingModule({
      providers: [HttpPortfolioRepository, provideHttpClient(), provideHttpClientTesting()],
    });
    const http = TestBed.inject(HttpTestingController);
    let result: unknown;
    TestBed.inject(HttpPortfolioRepository).get().subscribe(p => (result = p));
    http.expectOne('data/portfolio.json').flush(PORTFOLIO_FIXTURE);
    expect(result).toEqual(PORTFOLIO_FIXTURE);
    http.verify();
  });
});
