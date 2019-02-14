import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: '0', height: '0', overflow: 'hidden' }),
    animate('.5s ease-out', style({ opacity: '1', height: '*' }))
  ])
]);
