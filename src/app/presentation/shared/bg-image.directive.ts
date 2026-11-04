import { Directive, ElementRef, effect, inject, input } from '@angular/core';

/** Sets a CSS background image only if the file exists, otherwise the CSS gradient placeholder stays. */
@Directive({ selector: '[appBgImage]' })
export class BgImageDirective {
  readonly src = input<string | undefined>(undefined, { alias: 'appBgImage' });
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const src = this.src();
      if (!src) return;
      const img = new Image();
      img.onload = () => (this.el.style.backgroundImage = `url("${src}")`);
      img.src = src;
    });
  }
}
