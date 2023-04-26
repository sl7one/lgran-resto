import { useRef } from 'react';
import plateWithHoney from '../../assets/img/foodQuality/foodQuality.png';
import { FoodQualityBox } from '../../styles/styled';
import { SectionTitle } from '../SictionTitle/SectionTitle';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export const FoodQuality = () => {
   const container = useRef(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         // scroll-trigger
         gsap.fromTo(
            '[title="title-quality"]',
            { opacity: 0, x: 250 },
            {
               opacity: 1,
               x: 0,
               scrollTrigger: {
                  trigger: '[title="title-quality"]',
                  start: 'top 55%', //top элемента bottom вюпорта
                  end: '300px 75%',
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.fromTo(
            '[title="text"]',
            { x: 250, opacity: 0 },
            {
               x: 0,
               opacity: 1,
               scrollTrigger: {
                  trigger: '[title="text"]',
                  start: 'top 75%', //top элемента bottom вюпорта
                  end: '200px bottom',
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.fromTo(
            '[title="seo"]',
            { x: 250, opacity: 0 },
            {
               x: 0,
               opacity: 1,
               // stagger: 2,
               scrollTrigger: {
                  trigger: '[title="seo"]',
                  start: 'top 88%', //top элемента bottom вюпорта
                  end: '200px bottom',
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.fromTo(
            '[alt="plate With Honey"]',
            { y: -250, filter: 'blur(10px)  grayscale(1)' },
            {
               y: 0,
               filter: 'blur(0px) grayscale(0)',

               scrollTrigger: {
                  trigger: '[alt="plate With Honey"]',
                  start: 'top -10%', //top элемента bottom вюпорта
                  end: 'bottom bottom',
                  // markers: true,
                  scrub: 5,
               },
            }
         );
      }, container);
      return () => ctx.revert();
   }, []);

   return (
      <FoodQualityBox ref={container}>
         <div title="title-quality">
            <SectionTitle title="our food quality" />
         </div>
         <p title="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo vive rra maecenas accumsan lacus vel facilisis.
         </p>
         <p title="seo">
            <span>Double The Fun</span>
            <span>On Every Saturday</span>
            <span>Get upto 50% discount</span>
         </p>
         <img
            src={plateWithHoney}
            alt="plate With Honey"
         />
      </FoodQualityBox>
   );
};
