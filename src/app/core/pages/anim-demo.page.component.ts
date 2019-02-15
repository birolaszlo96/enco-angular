import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  templateUrl: './anim-demo.page.component.html',
  styles: ['./anim-demo.page.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '1000px',
          width: '1000px',
          borderRadius: '500px',
          backgroundColor: 'green'
        })
      ),
      state(
        'closed',
        style({
          height: '4px',
          width: '4px',
          borderRadius: '2px',
          backgroundColor: 'green'
        })
      ),
      transition('open => closed', [animate('3s')]),
      transition('closed => open', [animate('3s')])
    ])
  ]
})
export class AnimDemoPageComponent {
  isOpen = false;

  open() {
    this.isOpen = true;
  }
  close() {
    this.isOpen = false;
  }
}
