import { animate, animateChild, AnimationMetadata, group, query, style, transition, trigger } from "@angular/animations";

const animationSpeed = '300ms';

const slideIn: AnimationMetadata[] = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: 'calc(100% - 3rem)'
    })
  ]),
  query(':enter', [
    style({ left: '100%' })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate(`${animationSpeed} ease-out`, style({ left: '-100%' }))
    ]),
    query(':enter', [
      animate(`${animationSpeed} ease-out`, style({ left: '1.5rem' }))
    ])
  ]),
  query(':enter', animateChild()),
];

const slideOut: AnimationMetadata[] = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: 'calc(100% - 3rem)'
    })
  ]),
  query(':enter', [
    style({ left: '-100%' })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate(`${animationSpeed} ease-out`, style({ left: '100%' }))
    ]),
    query(':enter', [
      animate(`${animationSpeed} ease-out`, style({ left: '1.5rem' }))
    ])
  ]),
  query(':enter', animateChild()),
];

export const slideAnimation =
  trigger('routeAnimations', [
    transition('HomePage => ProfilePage', slideIn),
    transition('ProfilePage => HomePage', slideOut),

    transition('ProfilePage => ProfileSelectAvatarPage', slideIn),
    transition('ProfileSelectAvatarPage => ProfilePage', slideOut),
  ]);
