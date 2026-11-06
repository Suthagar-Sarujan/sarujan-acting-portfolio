import { Component, input } from '@angular/core';
import { About } from '../../../domain/models/portfolio.model';
import { BgImageDirective } from '../../shared/bg-image.directive';
import { RevealDirective } from '../../shared/reveal.directive';

interface Segment { text: string; highlight: boolean; }

@Component({
  selector: 'app-about',
  imports: [BgImageDirective, RevealDirective],
  templateUrl: './about.section.html',
  styleUrl: './about.section.scss',
})
export class AboutSection {
  readonly about = input.required<About>();
  /** Name to highlight wherever it appears in the bio. */
  readonly name = input<string>('');

  segments(paragraph: string): Segment[] {
    const name = this.name().trim();
    if (!name) return [{ text: paragraph, highlight: false }];
    const lower = paragraph.toLowerCase();
    const needle = name.toLowerCase();
    const result: Segment[] = [];
    let from = 0;
    for (let at = lower.indexOf(needle); at !== -1; at = lower.indexOf(needle, from)) {
      if (at > from) result.push({ text: paragraph.slice(from, at), highlight: false });
      result.push({ text: paragraph.slice(at, at + needle.length), highlight: true });
      from = at + needle.length;
    }
    if (from < paragraph.length) result.push({ text: paragraph.slice(from), highlight: false });
    return result;
  }
}
