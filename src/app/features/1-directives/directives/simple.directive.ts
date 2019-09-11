import { Directive, Host, HostBinding, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSimpleDirective]'
})
export class SimpleDirective {
  color = 'red';

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.setBackgroundColor(this.color);
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.setBackgroundColor(null);
  }

  private setBackgroundColor(color:string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
