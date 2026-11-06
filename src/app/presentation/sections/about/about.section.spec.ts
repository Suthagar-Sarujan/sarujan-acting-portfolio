import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PORTFOLIO_FIXTURE } from '../../../testing/portfolio.fixture';
import { AboutSection } from './about.section';

describe('AboutSection', () => {
  let fixture: ComponentFixture<AboutSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AboutSection] }).compileComponents();
    fixture = TestBed.createComponent(AboutSection);
    fixture.componentRef.setInput('about', PORTFOLIO_FIXTURE.about);
    fixture.componentRef.setInput('name', 'Paragraph');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('highlights the name inside the bio', () => {
    expect(fixture.nativeElement.querySelector('mark.name')?.textContent).toBe('Paragraph');
  });

  it('renders its content', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('.chips li').length).toBe(2);
    expect(el.querySelector('.stats b')?.textContent).toBe('5+');
  });
});
