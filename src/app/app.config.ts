import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { PortfolioRepository } from './domain/repositories/portfolio.repository';
import { HttpPortfolioRepository } from './infrastructure/repositories/http-portfolio.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    // Composition root: bind the domain port to its implementation.
    { provide: PortfolioRepository, useClass: HttpPortfolioRepository },
  ],
};
