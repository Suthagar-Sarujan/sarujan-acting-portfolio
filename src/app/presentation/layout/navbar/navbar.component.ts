import { Component, HostListener, input, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly name = input.required<string>();
  readonly solid = signal(false);
  readonly open = signal(false);
  readonly links = [
    { href: '#about', label: 'About', cta: false },
    { href: '#showreel', label: 'Showreel', cta: false },
    { href: '#work', label: 'Work', cta: false },
    { href: '#gallery', label: 'Gallery', cta: false },
    { href: '#journey', label: 'Journey', cta: false },
    { href: '#contact', label: 'Contact', cta: true },
  ];

  @HostListener('window:scroll')
  onScroll(): void { this.solid.set(window.scrollY > 40); }
}
