import { useEffect } from 'react';
import bigPlate from '../../assets/img/hero/bigPlate.png';
import currant from '../../assets/img/hero/currant.png';
import rosemary from '../../assets/img/hero/rosemary.png';
import smallPlate from '../../assets/img/hero/smallPlate.png';
import logo from '../../assets/img/logo.png';
import { HeroBox } from '../../styles/styled';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { mouseEnter, mouseLeave } from '../../gsap/utils';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
   const container = useRef();

   useEffect(() => {
      const ctx = gsap.context((self) => {
         gsap
            .timeline({
               defaults: { duration: 2, ease: 'power3.out' },
            })
            .fromTo(
               self.selector('[alt="small plate"]'),
               { x: -400, opacity: 0, rotate: -90 },
               { x: 0, rotate: 0, opacity: 1 }
            )
            .fromTo(
               self.selector('[alt="bigPlate"]'),
               { x: -400, opacity: 0, rotate: -90 },
               { x: 0, opacity: 1, rotate: 0 },
               '<-1'
            )
            .fromTo(
               self.selector('[alt="rosemary"]'),
               { opacity: 0, rotate: 45, scale: 1.25 },
               { opacity: 1, rotate: 0, scale: 1 },
               '<-1'
            )
            .fromTo(
               self.selector('[alt="currant"]'),
               { opacity: 0, rotate: -45, scale: 1.25 },
               { opacity: 1, rotate: 0, scale: 1 },
               '>-1.5'
            )
            .fromTo(
               self.selector('h2'),
               { opacity: 0, y: -50 },
               { opacity: 1, y: 0 },
               '<'
            )
            .fromTo(
               self.selector('[link="LearnMore"]'),
               { opacity: 0, y: -50 },
               { opacity: 1, y: 0 },
               '<'
            );

         //scroll-trigger

         gsap.fromTo(
            self.selector('[alt="logo"]'),
            { y: -25, scale: 1 },
            {
               y: 0,
               scale: 1.25,
               scrollTrigger: {
                  trigger: self.selector('[alt="logo"]'),
                  start: 'top bottom', //top элемента bottom вюпорта
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.to(self.selector('[alt="small plate"]'), {
            y: -50,
            scrollTrigger: {
               trigger: self.selector('[alt="small plate"]'),
               start: 'top 30%', //top элемента bottom вюпорта
               end: 'bottom center',
               // markers: true,
               scrub: 2,
            },
         });
         gsap.fromTo(
            self.selector('[alt="bigPlate"]'),
            { x: 0, y: 0 },
            {
               y: -100,
               x: -50,
               scrollTrigger: {
                  trigger: self.selector('[alt="small plate"]'),
                  start: 'top top', //top элемента bottom вюпорта
                  end: 'bottom top',
                  // markers: true,
                  scrub: 2,
               },
            }
         );
         gsap.to(self.selector('[alt="rosemary"]'), {
            y: -75,
            x: 15,
            scrollTrigger: {
               trigger: self.selector('[alt="rosemary"]'),
               start: 'top 35%', //top элемента bottom вюпорта
               end: 'bottom end',
               // markers: true,
               scrub: 2,
            },
         });
         gsap.to(self.selector('[alt="currant"]'), {
            y: -55,
            x: 35,
            scrollTrigger: {
               trigger: self.selector('[alt="currant"]'),
               start: 'top 18%', //top элемента bottom вюпорта
               end: 'bottom end',
               // markers: true,
               scrub: 2,
            },
         });
         gsap.to(self.selector('[link="LearnMore"]'), {
            x: -50,
            scrollTrigger: {
               trigger: self.selector('[link="LearnMore"]'),
               start: 'top 45%', //top элемента bottom вюпорта
               end: '150px end',
               // markers: true,
               scrub: 2,
            },
         });
         gsap.fromTo(
            self.selector('[text="bottom"]'),
            { opacity: 0, x: 150 },
            {
               opacity: 1,
               x: 0,
               scrollTrigger: {
                  trigger: self.selector('[text="bottom"]'),
                  start: 'top bottom', //top элемента bottom вюпорта
                  end: 'bottom bottom',
                  // markers: true,
                  scrub: 2,
               },
            }
         );
      }, container);
      return () => ctx.revert();
   }, []);

   return (
      <HeroBox ref={container}>
         <h1
            style={{
               position: 'absolute',
               width: 0,
               height: 0,
               opacity: 0,
            }}
         >
            Lgran
         </h1>
         <h2>
            Start your meal with <br /> our exclusive menu
         </h2>
         <p
            link="LearnMore"
            onMouseEnter={() => mouseEnter("[link = 'LearnMore']")}
            onMouseLeave={() => mouseLeave("[link = 'LearnMore']")}
         >
            Learn more...
         </p>
         <img
            src={logo}
            alt="logo"
         />
         <p text="bottom">
            Book your <br /> table <span>now</span>
         </p>
         <img
            src={smallPlate}
            alt="small plate"
         />
         <img
            src={bigPlate}
            alt="bigPlate"
         />
         <img
            src={rosemary}
            alt="rosemary"
         />
         <img
            src={currant}
            alt="currant"
         />
      </HeroBox>
   );
};
