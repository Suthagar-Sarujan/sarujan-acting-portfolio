import { Component, input } from '@angular/core';
import { NowItem, WorkItem } from '../../../domain/models/portfolio.model';
import { BgImageDirective } from '../../shared/bg-image.directive';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-work',
  imports: [BgImageDirective, RevealDirective],
  templateUrl: './work.section.html',
  styleUrl: './work.section.scss',
})
export class WorkSection {
  readonly now = input.required<NowItem[]>();
  readonly work = input.required<WorkItem[]>();
}
