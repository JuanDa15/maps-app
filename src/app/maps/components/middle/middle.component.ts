import { Component } from '@angular/core';

@Component({
  selector: 'middle',
  template: `
    <div class="middle">
          +
    </div>
  `,
  styles: [`
    .middle{
      position: fixed;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      font-size: 1rem;
      font-weight: 400;
      user-select: none;
    }
  `]
})
export class MiddleComponent{

  constructor() { }

}
