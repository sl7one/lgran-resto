import { useEffect } from 'react';
import logo from '../../assets/img/logo.png';
import { HeaderBox } from '../../styles/styled';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useTheme } from 'styled-components';
import { mouseEnter, mouseLeave } from '../../gsap/utils';

export const Header = () => {
   const navLeft = useRef(null);
   const navRight = useRef(null);
   const logoRef = useRef(null);
   const bgRef = useRef(null);
   const theme = useTheme();

   useEffect(() => {
      const ctx = gsap.context((self) => {
         gsap
            .timeline({ defaults: { duration: 2.5, ease: 'power3.out' } })
            .fromTo(self.selector(navLeft.current), { x: 30 }, { x: 0 })
            .fromTo(self.selector(navRight.current), { x: -30 }, { x: 0 }, '<')
            .fromTo(
               self.selector(logoRef.current),
               { opacity: 0, scale: 1.25 },
               { opacity: 1, scale: 1, ease: 'elastic.out(1, 0.25)', duration: 3.5 },
               '<'
            )
            .fromTo(
               self.selector(bgRef.current),
               {
                  backgroundColor: 'transparent',
               },
               {
                  backgroundColor: theme.colors.mainGrayBg,
                  borderTopLeftRadius: '80px 80px',
                  borderBottomRightRadius: '80px 80px',
               },
               '<'
            );
      }, bgRef);
      return () => ctx.revert();
   }, [theme.colors.mainGrayBg]);

   const onMouseEnter = ({ currentTarget }) => {
      mouseEnter(currentTarget);
   };
   const onMouseLeave = ({ currentTarget }) => {
      mouseLeave(currentTarget);
   };

   return (
      <HeaderBox ref={bgRef}>
         <nav ref={navLeft}>
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
         </nav>
         <img
            src={logo}
            alt="лого"
            ref={logoRef}
         />
         <nav ref={navRight}>
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
      </HeaderBox>
   );
};
