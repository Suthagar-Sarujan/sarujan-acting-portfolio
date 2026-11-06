import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [IconComponent] }).compileComponents();
    fixture = TestBed.createComponent(IconComponent);
  });

  it('renders the requested icon', () => {
    fixture.componentRef.setInput('name', 'mic');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('rect')).toBeTruthy();
  });

  it('falls back to a star for unknown names', () => {
    fixture.componentRef.setInput('name', 'nope');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('polygon')).toBeTruthy();
  });
});
