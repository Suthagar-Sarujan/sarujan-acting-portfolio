import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PORTFOLIO_FIXTURE } from '../../../testing/portfolio.fixture';
import { GallerySection } from './gallery.section';

describe('GallerySection', () => {
  let fixture: ComponentFixture<GallerySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [GallerySection] }).compileComponents();
    fixture = TestBed.createComponent(GallerySection);
    fixture.componentRef.setInput('images', PORTFOLIO_FIXTURE.gallery);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders its content', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('.g').length).toBe(3);
    expect(el.querySelector('.lightbox')).toBeNull();
  });
  it('opens, steps and closes the lightbox', () => {
    const c = fixture.componentInstance;
    c.open(0);
    expect(c.current()).toBe('a.jpg');
    c.step(-1);
    expect(c.current()).toBe('c.jpg');
    c.close();
    expect(c.current()).toBeNull();
  });
});
