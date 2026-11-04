import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PortfolioRepository } from '../../domain/repositories/portfolio.repository';
import { PORTFOLIO_FIXTURE } from '../../testing/portfolio.fixture';
import { GetPortfolioUseCase } from './get-portfolio.use-case';

describe('GetPortfolioUseCase', () => {
  it('returns the portfolio from the repository port', done => {
    TestBed.configureTestingModule({
      providers: [{ provide: PortfolioRepository, useValue: { get: () => of(PORTFOLIO_FIXTURE) } }],
    });
    TestBed.inject(GetPortfolioUseCase).execute().subscribe(p => {
      expect(p.name).toBe('Test Actor');
      done();
    });
  });
});
