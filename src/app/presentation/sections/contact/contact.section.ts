import { Component, input } from '@angular/core';
import { Contact } from '../../../domain/models/portfolio.model';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.section.html',
  styleUrl: './contact.section.scss',
})
export class ContactSection {
  readonly contact = input.required<Contact>();
}
