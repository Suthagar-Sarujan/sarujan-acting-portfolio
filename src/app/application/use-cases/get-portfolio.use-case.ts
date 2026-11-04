import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from '../../domain/models/portfolio.model';
import { PortfolioRepository } from '../../domain/repositories/portfolio.repository';

// Application layer: depends only on the domain port, never on HTTP.
@Injectable({ providedIn: 'root' })
export class GetPortfolioUseCase {
  private readonly repo = inject(PortfolioRepository);

  execute(): Observable<Portfolio> {
    return this.repo.get();
  }
}
