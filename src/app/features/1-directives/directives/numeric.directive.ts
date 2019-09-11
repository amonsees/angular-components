import { Directive, ElementRef, Renderer, OnInit, HostListener, HostBinding, Renderer2, Input } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: 'input[appNumeric],input[type=number]',
})
export class NumericDirective {
  @Input() allowDecimal: boolean;

  @HostBinding('style')
  elementStyle: SafeStyle;

  private validKeys = ['Delete', 'Backspace', 'Tab', 'Escape', 'Enter', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
  private sub: any;

  constructor(
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    this.clearStlye();

    if (this.isValidControlKey(e)) {
      return;  // let it happen, don't do anything
    }

    if (this.allowDecimal && e.key === '.')  {
      // Ensure that decimal hasn't already been added
      if (this.getInputValue().indexOf('.') === -1) {
        return;
      }
    }

    if (!this.isNumberKey(e)) {
      // stop the keypress
      e.preventDefault();

      this.highlightElement();
    }
  }

  private clearStlye() {
    this.elementStyle = null;
  }

  private highlightElement() {
     // highlight the input border after invalid input
      if (!this.elementStyle) {
        this.elementStyle = this.sanitizer.bypassSecurityTrustStyle('border: 4px solid #dc3545;');

        setTimeout(() => {
          this.elementStyle = null;
        }, 750);
      }
  }

  private isValidControlKey(ke: KeyboardEvent): boolean {
    return this.validKeys.indexOf(ke.key) !== -1  ||
      ke.ctrlKey === true ||
      ke.altKey === true;
  }

  private isNumberKey(ke: KeyboardEvent): boolean {
    return (parseInt(ke.key, 10).toString() === ke.key);
  }

  private getInputValue(): string {
    return this.elementRef.nativeElement.value;
  }
}
