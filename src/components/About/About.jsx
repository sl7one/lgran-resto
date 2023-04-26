import { useEffect } from 'react';
import plate from '../../assets/img/about/about.png';
import { AboutBox } from '../../styles/styled';
import { SectionTitle } from '../SictionTitle/SectionTitle';
import { useRef } from 'react';
import { gsap } from 'gsap';

export const About = () => {
   const container = useRef(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         //scroll-trigger
         gsap.fromTo(
            '[text="about"]',
            { y: -250 },
            {
               y: 0,
               scrollTrigger: {
                  trigger: '[text="about"]',
                  start: 'top bottom', //top элемента bottom вюпорта
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.fromTo(
            '[text="visit"]',
            { y: -250 },
            {
               y: 0,
               scrollTrigger: {
                  trigger: '[text="visit"]',
                  start: 'top bottom', //top элемента bottom вюпорта
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.fromTo(
            '[alt="plate with waffles"]',
            { y: -150, filter: 'blur(10px)  grayscale(1)' },
            {
               y: 0,
               filter: 'blur(0px) grayscale(0)',

               scrollTrigger: {
                  trigger: '[alt="plate with waffles"]',
                  start: 'top center', //top элемента bottom вюпорта
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.fromTo(
            "[title='title']",
            { opacity: 0, y: -100 },
            {
               opacity: 1,
               y: 0,
               scrollTrigger: {
                  trigger: "[title='title']",
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
            alt="plate with waffles"
         />
      </AboutBox>
   );
};
