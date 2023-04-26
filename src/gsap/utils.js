import { gsap } from 'gsap';

gsap.defaults({
   ease: 'power3.out',
   duration: 1.5,
});

export const mouseEnter = (el) => gsap.to(el, { scale: 1.25 });
export const mouseLeave = (el) => gsap.to(el, { scale: 1 });
