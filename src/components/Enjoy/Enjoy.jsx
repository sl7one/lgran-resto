import { EnjoyBox } from '../../styles/styled';
import enjoy from '../../assets/img/enjoy/enjoy.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Enjoy = () => {
   const container = useRef(null);

   useEffect(() => {
      const ctx = gsap.context((self) => {
         //scroll-trigger
         setTimeout(() => {
            gsap.fromTo(
               self.selector('[title="meta"]'),
               { x: '100%', opacity: 0 },
               {
                  x: 0,
                  opacity: 1,
                  scrollTrigger: {
                     trigger: '[alt="enjoy"]',
                     start: 'top center', //top элемента bottom вюпорта
                     end: 'bottom center',
                     // markers: true,
                     scrub: 2,
                  },
               }
            );
            gsap.fromTo(
               self.selector('[alt="enjoy"]'),
               { x: '-100%', opacity: 0, rotate: 180 },
               {
                  x: 0,
                  opacity: 1,
                  rotate: 0,
                  scrollTrigger: {
                     trigger: '[alt="enjoy"]',
                     start: 'top center', //top элемента bottom вюпорта
                     end: 'bottom center',
                     // markers: true,
                     scrub: 2,
                  },
               }
            );
         }, 500);
      }, container);
      return () => ctx.revert();
   }, []);

   return (
      <EnjoyBox ref={container}>
         <div title="meta">
            <h2>Enjoy Our Best Meal</h2>
            <p title="text">
               Lorem ipsum dolor sit amet, cosectetur adi piscing elit, sed do eiusmod
               tempor incididunt ut labore etdolore magna sed do eiusmod tempor incididunt
               ut labore etdolore
            </p>
            <p title="enjoy">CONTACT US NOW</p>
         </div>
         <img
            src={enjoy}
            alt="enjoy"
         />
      </EnjoyBox>
   );
};
