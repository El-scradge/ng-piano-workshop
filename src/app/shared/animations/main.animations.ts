import { animate, trigger, state, style, transition } from '@angular/animations';

export const loadTriggerLeft = trigger( 'loadTriggerLeft', [
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
export const loadTriggerRight = trigger( 'loadTriggerRight', [
  state('inRight',
    style({
      opacity: 1,
      transform: 'translateX(0px)'
    }),
  ),
  state('void', style({
    opacity : 0,
    transform: 'translateX(200px)'
  })),
  state('outLeft', style(
    {
      opacity : 0,
      transform: 'translateX(200px)'
    },
  )),
  transition('void <=> inRight', animate('0.4s ease'))
  ]
);
