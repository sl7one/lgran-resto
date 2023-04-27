import { FooterBox } from '../../styles/styled';
import logo from '../../assets/img/logo.png';
import f from '../../assets/img/socLinks/f.png';
import i from '../../assets/img/socLinks/i.png';
import p from '../../assets/img/socLinks/p.png';
import t from '../../assets/img/socLinks/t.png';
import { mouseEnter, mouseLeave } from '../../gsap/utils';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const soc = [f, i, p, t];

export const Footer = () => {
   const container = useRef(null);

   useEffect(() => {
      const ctx = gsap.context((self) => {
         //scroll-trigger
         gsap.fromTo(
            '[alt="logo"]',
            { scale: 1.5 },
            {
               scale: 1,
               scrollTrigger: {
                  trigger: '[alt="logo"]',
                  start: 'top center', //top элемента bottom вюпорта
                  end: 'bottom +=600',
                  markers: true,
                  scrub: 2,
               },
            }
         );
      }, container);
      return () => ctx.revert();
   }, []);

   const onMouseEnter = ({ currentTarget }) => {
      mouseEnter(currentTarget);
   };

   const onMouseLeave = ({ currentTarget }) => {
      mouseLeave(currentTarget);
   };

   return (
      <FooterBox ref={container}>
         <img
            src={logo}
            alt="logo"
         />
         <nav>
            <p
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
            >
               ABOUT US
            </p>
            <p
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
            >
               MENU
            </p>
            <p
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
            >
               GALLERY
            </p>
            <p
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
            >
               BOOKINGS
            </p>
            <p
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
            >
               CONTACTS
            </p>
            <p
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
            >
               BLOG
            </p>
         </nav>

         <ul>
            {soc.map((el, idx) => (
               <li key={idx}>
                  <img
                     src={el}
                     alt="pic"
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                  />
               </li>
            ))}
         </ul>
      </FooterBox>
   );
};
