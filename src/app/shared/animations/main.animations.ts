import { animate, trigger, state, style, transition } from '@angular/animations';

export const loadTrigger = trigger( 'loadTrigger', [
  state('inLeft',
    style({
      opacity: 1,
      transform: 'translateX(0px)'
    }),
  ),
  state('void', style({
    opacity : 0,
    transform: 'translateX(-200px)'
  })),
  state('outLeft', style(
    {
      opacity : 0,
      transform: 'translateX(-200px)'
    },
  )),
  transition('void <=> inLeft', animate('0.4s ease'))
  ]
);
