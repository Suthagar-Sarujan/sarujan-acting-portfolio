import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RevealDirective } from './reveal.directive';

@Component({ imports: [RevealDirective], template: `<div appReveal>x</div>` })
class HostComponent {}

describe('RevealDirective', () => {
  it('adds the reveal class to its host', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').classList).toContain('reveal');
  });
});
