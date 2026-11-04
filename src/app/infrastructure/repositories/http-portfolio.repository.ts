import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../../domain/models/portfolio.model';
import { PortfolioRepository } from '../../domain/repositories/portfolio.repository';

// Infrastructure layer: reads public/data/portfolio.json.
@Injectable()
export class HttpPortfolioRepository extends PortfolioRepository {
  private readonly http = inject(HttpClient);

  get(): Observable<Portfolio> {
    return this.http.get<Portfolio>('data/portfolio.json');
  }
}
