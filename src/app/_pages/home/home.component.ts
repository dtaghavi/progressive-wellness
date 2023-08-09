import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    @ViewChild('animateDiv1') animateDiv1!: ElementRef;
    @ViewChild('animateDiv2') animateDiv2!: ElementRef;

    [key: string]: any;
    
    isHidden1 = true;
    isHidden2 = true;

    constructor() {
       
    }

    ngAfterViewInit() {
        this.observeElement(this.animateDiv1, 'isHidden1');
        this.observeElement(this.animateDiv2, 'isHidden2');
    }

    private observeElement(elementRef: ElementRef, property: string): void {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer: IntersectionObserver = new IntersectionObserver((entries) => this.handleIntersect(entries, observer, property), options);
        observer.observe(elementRef.nativeElement);
    }

    private handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver, property: string): void {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this[property] = false;
                observer.unobserve(entry.target);
            }
        });
    }
}