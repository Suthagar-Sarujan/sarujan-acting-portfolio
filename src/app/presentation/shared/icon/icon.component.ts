import { Component, input } from '@angular/core';

export type IconName = 'video' | 'mic' | 'cap' | 'star' | 'music';

/** Minimal line-icon set (24x24, stroke = currentColor). Unknown names fall back to a star. */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  readonly name = input.required<string>();
}
