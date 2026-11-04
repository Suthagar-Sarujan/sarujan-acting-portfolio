import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GetPortfolioUseCase } from '../../../application/use-cases/get-portfolio.use-case';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { HeroSection } from '../../sections/hero/hero.section';
import { AboutSection } from '../../sections/about/about.section';
import { ShowreelSection } from '../../sections/showreel/showreel.section';
import { WorkSection } from '../../sections/work/work.section';
import { GallerySection } from '../../sections/gallery/gallery.section';
import { JourneySection } from '../../sections/journey/journey.section';
import { ContactSection } from '../../sections/contact/contact.section';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroSection, AboutSection, ShowreelSection, WorkSection, GallerySection, JourneySection, ContactSection],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  readonly portfolio = toSignal(inject(GetPortfolioUseCase).execute());
  readonly year = new Date().getFullYear();
}
