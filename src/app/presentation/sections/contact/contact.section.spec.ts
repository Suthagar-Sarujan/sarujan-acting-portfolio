import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PORTFOLIO_FIXTURE } from '../../../testing/portfolio.fixture';
import { ContactSection } from './contact.section';

describe('ContactSection', () => {
  let fixture: ComponentFixture<ContactSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ContactSection] }).compileComponents();
    fixture = TestBed.createComponent(ContactSection);
    fixture.componentRef.setInput('contact', PORTFOLIO_FIXTURE.contact);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders its content', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('a[href^="mailto:"]')).toBeTruthy();
    expect(el.querySelector('a[href^="tel:"]')).toBeNull();
  });
});
