import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio.model';

// Domain port. An abstract class doubles as the DI token.
export abstract class PortfolioRepository {
  abstract get(): Observable<Portfolio>;
}
