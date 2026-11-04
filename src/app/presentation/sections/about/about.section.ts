import { Component, input } from '@angular/core';
import { About } from '../../../domain/models/portfolio.model';
import { BgImageDirective } from '../../shared/bg-image.directive';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [BgImageDirective, RevealDirective],
  templateUrl: './about.section.html',
  styleUrl: './about.section.scss',
})
export class AboutSection {
  readonly about = input.required<About>();
}
