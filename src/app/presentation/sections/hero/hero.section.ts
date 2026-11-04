import { Component, input } from '@angular/core';
import { Portfolio } from '../../../domain/models/portfolio.model';
import { BgImageDirective } from '../../shared/bg-image.directive';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [BgImageDirective, RevealDirective],
  templateUrl: './hero.section.html',
  styleUrl: './hero.section.scss',
})
export class HeroSection {
  readonly data = input.required<Portfolio>();
}
