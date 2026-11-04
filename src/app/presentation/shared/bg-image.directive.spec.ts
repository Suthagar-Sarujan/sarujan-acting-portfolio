import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BgImageDirective } from './bg-image.directive';

@Component({ imports: [BgImageDirective], template: `<div [appBgImage]="'assets/images/does-not-exist.jpg'"></div>` })
class HostComponent {}

describe('BgImageDirective', () => {
  it('keeps the placeholder when the image is missing', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    await new Promise(r => setTimeout(r, 50));
    expect(fixture.nativeElement.querySelector('div').style.backgroundImage).toBe('');
  });
});
