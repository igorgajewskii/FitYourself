import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[numberOnly]',
})
export class NumberOnlyDirective {
  constructor(private el: ElementRef) {}

  @Input() numberOnly: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
    if (this.numberOnly) {
      if (
        // Allow: Ctrl+A
        (e.key === 'a' && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.key === 'c' && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.key === 'v' && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.key === 'x' && (e.ctrlKey || e.metaKey)) ||
        e.key === 'Home' ||
        e.key === 'End' ||
        e.key === 'ArrowUp' ||
        e.key === 'ArrowDown' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowRight' ||
        e.key === 'Backspace'
      ) {
        // let it happen, don't do anything
        return;
      }
      // Ensure that it is a number and stop the keypress
      if (isNaN(+e.key)) {
        e.preventDefault();
      }
    }
  }

  @HostListener('paste', ['$event']) onPaste(e: ClipboardEvent) {
    let data = e.clipboardData?.getData('text');
    if (data === null || data === undefined) {
      e.preventDefault();
    }
    if (data !== undefined && data !== null && isNaN(+data)) {
      e.preventDefault();
    }
  }
}
