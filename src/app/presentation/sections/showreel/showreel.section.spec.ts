import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PORTFOLIO_FIXTURE } from '../../../testing/portfolio.fixture';
import { ShowreelSection } from './showreel.section';

describe('ShowreelSection', () => {
  let fixture: ComponentFixture<ShowreelSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ShowreelSection] }).compileComponents();
    fixture = TestBed.createComponent(ShowreelSection);
    fixture.componentRef.setInput('videos', PORTFOLIO_FIXTURE.videos);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders its content', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('.vthumb').length).toBe(2);
    expect(el.querySelector('video')).toBeTruthy();
  });
  it('switches to the youtube video when selected', () => {
    fixture.componentInstance.select(1);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('iframe')).toBeTruthy();
  });
});
