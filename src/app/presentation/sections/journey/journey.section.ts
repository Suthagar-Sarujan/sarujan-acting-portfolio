import { Component, input } from '@angular/core';
import { Milestone } from '../../../domain/models/portfolio.model';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-journey',
  imports: [RevealDirective],
  templateUrl: './journey.section.html',
  styleUrl: './journey.section.scss',
})
export class JourneySection {
  readonly milestones = input.required<Milestone[]>();
}
