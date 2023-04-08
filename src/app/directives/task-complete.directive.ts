import { ElementRef, Directive, Renderer2, Input, AfterViewInit, OnInit, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appTaskComplete]'
})
export class TaskCompleteDirective implements AfterViewChecked {

  @Input('appTaskComplete') options: { 'is-complete': boolean } = { 'is-complete': false };

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewChecked(): void {
    if (this.options['is-complete']) {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'line-through');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    }
  }
}


