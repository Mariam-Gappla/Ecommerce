import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]',
  standalone:true,
})
export class ShadowDirective {

  constructor(private elemRef:ElementRef) { 
  }
  @HostListener('mouseenter')mouseover(){
    this.elemRef.nativeElement.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.3)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elemRef.nativeElement.style.boxShadow = 'none';
  }

}
