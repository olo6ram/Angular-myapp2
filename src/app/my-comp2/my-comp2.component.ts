import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp2',
  template: `<div class="container2">es un mensaje de error</div>`,
  styles: [`
      .container2{
        background-color: red;
        color: white;
      }`]
})
export class MyComp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
