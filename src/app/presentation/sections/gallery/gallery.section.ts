import { Component, HostListener, computed, input, signal } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-gallery',
  imports: [RevealDirective],
  templateUrl: './gallery.section.html',
  styleUrl: './gallery.section.scss',
})
export class GallerySection {
  readonly images = input.required<string[]>();
  private readonly active = signal<number | null>(null);
  readonly current = computed(() => {
    const i = this.active();
    return i === null ? null : this.images()[i];
  });

  open(i: number): void { this.active.set(i); }
  close(): void { this.active.set(null); }
  step(d: number): void {
    const n = this.images().length;
    this.active.update(i => (i === null ? null : (i + d + n) % n));
  }
  hide(e: Event): void { (e.target as HTMLElement).style.display = 'none'; }

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (this.active() === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.step(-1);
    if (e.key === 'ArrowRight') this.step(1);
  }
}
