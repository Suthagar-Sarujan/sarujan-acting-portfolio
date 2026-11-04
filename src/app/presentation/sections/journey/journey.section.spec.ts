import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PORTFOLIO_FIXTURE } from '../../../testing/portfolio.fixture';
import { JourneySection } from './journey.section';

describe('JourneySection', () => {
  let fixture: ComponentFixture<JourneySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [JourneySection] }).compileComponents();
    fixture = TestBed.createComponent(JourneySection);
    fixture.componentRef.setInput('milestones', PORTFOLIO_FIXTURE.journey);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders its content', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.tl h3')?.textContent).toBe('Milestone');
  });
});
