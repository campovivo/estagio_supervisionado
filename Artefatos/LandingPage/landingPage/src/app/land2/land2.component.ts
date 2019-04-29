import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition} from '@angular/animations';

@Component({
  selector: 'app-land2',
  templateUrl: './land2.component.html',
  styleUrls: ['./land2.component.css'],

})
export class Land2Component implements OnInit {

  state = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset
      console.log(componentPosition, scrollPosition);
      if (scrollPosition >= componentPosition*4) {
        console.log('some');
      } else {
        console.log('aparece');
      }

    }


  ngOnInit() {
  }

}
