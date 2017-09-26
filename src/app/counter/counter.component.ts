import { Component, OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, SimpleChanges, Input } from '@angular/core';

@Component({
    selector: 'counter',
    template: `
    <h1> Counter {{count}}</h1>
    `,
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() count

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        console.log('Counter ngOnChange', changes);
    }
    ngOnInit(){
        console.log('Counter onInit');
    }
    ngDoCheck() {
        console.log('Counter DoCheck')
    }
    ngAfterContentInit() {
        console.log('Counter AfterContentInit');
    }
    ngAfterContentChecked() {
        console.log('Counter AfterContentChecked');
    }
    ngAfterViewInit() {
        console.log('Counter AfterViewInit');
    }
    ngAfterViewChecked() {
        console.log('Counter AfterViewChecked');
    }
    ngOnDestroy() {
        console.log('Counter onDestroy');
    }
}
