import { NoteBox } from '../../styles/styled';
import noteBg from '../../assets/img/quoteBg.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Note = () => {
   const container = useRef(null);

   useEffect(() => {
      const ctx = gsap.context((self) => {
         gsap.fromTo(
            self.selector('span'),
            { rotate: 180, y: -150 },
            {
               rotate: 0,
               y: 0,

               scrollTrigger: {
                  trigger: self.selector('span'),
                  start: '-=200 center', //top элемента bottom вюпорта
                  end: '75% center',
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.fromTo(
            self.selector('[title="text"]'),
            { rotate: 180, y: -150 },
            {
               rotate: 0,
               y: 0,

               scrollTrigger: {
                  trigger: self.selector('[title="text"]'),
                  start: '-=200 center', //top элемента bottom вюпорта
                  end: '75% center',
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.fromTo(
            self.selector('[title="author"]'),
            { rotate: 180, y: -150 },
            {
               rotate: 0,
               y: 0,

               scrollTrigger: {
                  trigger: self.selector('[title="author"]'),
                  start: '-=200 center', //top элемента bottom вюпорта
                  end: '75% center',
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.fromTo(
            self.selector('[alt="bg"]'),
            { rotate: 360, x: '-80%', y: 0, filter: 'hue-rotate(0deg)' },
            {
               rotate: 0,
               x: '50%',
               y: '10%',
               scale: 3,
               filter: 'hue-rotate(360deg)',

               scrollTrigger: {
                  trigger: self.selector('[alt="bg"]'),
                  start: 'center center', //top элемента bottom вюпорта
                  end: '+=700 center',
                  // markers: true,
                  scrub: 2,
               },
            }
         );
      }, container);
      return () => ctx.revert();
   }, []);

   return (
      <NoteBox ref={container}>
         <span>&#8223;</span>
         <p title="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
         </p>

         <p title="author">Linda Steward</p>
         <img
            src={noteBg}
            alt="bg"
         />
      </NoteBox>
   );
};
