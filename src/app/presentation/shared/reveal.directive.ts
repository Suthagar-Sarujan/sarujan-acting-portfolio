import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/** Fades an element in when it scrolls into view. */
@Directive({ selector: '[appReveal]', host: { class: 'reveal' } })
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    this.observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        this.el.classList.add('in');
        this.observer?.disconnect();
      }
    }, { threshold: 0.12 });
    this.observer.observe(this.el);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
