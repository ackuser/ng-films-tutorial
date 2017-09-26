import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector:'[my-shadow]'
})
export class MyShadowDirective {

    el: ElementRef = null

    constructor(el: ElementRef) {
        this.el = el;
        this.setShadow('2px 2px 10px #ccc')
    }

    setShadow(shadow) {
        this.el.nativeElement.style.boxShadow = shadow;
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        this.setShadow('5px 5px 10px #f00');
    }
    @HostListener('mouseleave')
    onMouseLeave(){
        this.setShadow('2px 2px 10px #ccc');
    }
}
