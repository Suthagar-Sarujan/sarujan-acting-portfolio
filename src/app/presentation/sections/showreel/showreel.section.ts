import { Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from '../../../domain/models/portfolio.model';
import { BgImageDirective } from '../../shared/bg-image.directive';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-showreel',
  imports: [BgImageDirective, RevealDirective],
  templateUrl: './showreel.section.html',
  styleUrl: './showreel.section.scss',
})
export class ShowreelSection {
  readonly videos = input.required<Video[]>();
  private readonly sanitizer = inject(DomSanitizer);

  readonly index = signal(0);
  readonly failed = signal(false);
  readonly current = computed(() => this.videos()[this.index()]);
  readonly youtubeUrl = computed<SafeResourceUrl | null>(() => {
    const id = this.current()?.youtube;
    return id
      ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${encodeURIComponent(id)}`)
      : null;
  });

  select(i: number): void {
    this.failed.set(false);
    this.index.set(i);
  }
}
