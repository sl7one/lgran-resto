import { useEffect } from 'react';
import plate from '../../assets/img/about/about.png';
import { AboutBox } from '../../styles/styled';
import { SectionTitle } from '../SictionTitle/SectionTitle';
import { useRef } from 'react';
import { gsap } from 'gsap';

export const About = () => {
   const container = useRef(null);

   useEffect(() => {
      const ctx = gsap.context((self) => {
         //scroll-trigger
         gsap.fromTo(
            self.selector('[text="about"]'),
            { y: -250 },
            {
               y: 0,
               scrollTrigger: {
                  trigger: self.selector('[text="about"]'),
                  start: 'top bottom', //top элемента bottom вюпорта
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.fromTo(
            self.selector('[text="visit"]'),
            { y: -250 },
            {
               y: 0,
               scrollTrigger: {
                  trigger: self.selector('[text="visit"]'),
                  start: 'top bottom', //top элемента bottom вюпорта
                  // markers: true,
                  scrub: 2,
               },
            }
         );

         setTimeout(() => {
            gsap.fromTo(
               self.selector('[alt="plateWithWaffles"]'),
               { y: -150, filter: 'blur(10px)  grayscale(1)' },
               {
                  y: 0,
                  filter: 'blur(0px) grayscale(0)',
                  scrollTrigger: {
                     trigger: self.selector('[alt="plateWithWaffles"]'),
                     start: 'top center', //top элемента bottom вюпорта
                     end: 'bottom bottom',
                     // markers: true,
                     scrub: 2,
                  },
               }
            );
         }, 500);

         gsap.fromTo(
            self.selector("[title='title']"),
            { opacity: 0, y: -100 },
            {
               opacity: 1,
               y: 0,
               scrollTrigger: {
                  trigger: self.selector("[title='title']"),
                  start: 'top center', //top элемента bottom вюпорта
                  end: '300px center',
                  // markers: true,
                  scrub: 2,
               },
            }
         );
      }, container);
      return () => ctx.revert();
   }, []);

   return (
      <AboutBox ref={container}>
         <div title="title">
            <SectionTitle title="about" />
         </div>
         <p text="about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo vive rra maecenas accumsan lacus vel facilisis. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure d
         </p>
         <p text="visit">
            Visit OR Book <span>NOW</span>
         </p>
         <img
            src={plate}
            alt="plateWithWaffles"
         />
      </AboutBox>
   );
};
