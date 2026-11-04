import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PORTFOLIO_FIXTURE } from '../../../testing/portfolio.fixture';
import { WorkSection } from './work.section';

describe('WorkSection', () => {
  let fixture: ComponentFixture<WorkSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [WorkSection] }).compileComponents();
    fixture = TestBed.createComponent(WorkSection);
    fixture.componentRef.setInput('now', PORTFOLIO_FIXTURE.now);
    fixture.componentRef.setInput('work', PORTFOLIO_FIXTURE.work);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders its content', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('.now').length).toBe(1);
    expect(el.querySelector('.card h3')?.textContent).toBe('Film');
  });
});
