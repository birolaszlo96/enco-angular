import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective {
  @HostBinding('style.color') color: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  //   @HostListener('mouseover') onMouseOver() {
  //     this.el.nativeElement.style.backgroundColor = 'yellow';
  //   }

  //   @HostListener('mouseleave') onMouseLeave() {
  //     this.el.nativeElement.style.backgroundColor = 'initial';
  //   }

  @HostListener('click') onclick() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.el.nativeElement.style.backgroundColor = color;

    // this.color = 'red';

    // const span = this.renderer.createElement('span');
    // const text = this.renderer.createText('!!!');

    // this.renderer.appendChild(span, text);
    // this.renderer.appendChild(this.el.nativeElement, span);
  }
}
