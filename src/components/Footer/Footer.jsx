import { FooterBox } from '../../styles/styled';
import logo from '../../assets/img/logo.png';
import f from '../../assets/img/socLinks/f.png';
import i from '../../assets/img/socLinks/i.png';
import p from '../../assets/img/socLinks/p.png';
import t from '../../assets/img/socLinks/t.png';
import { mouseEnter, mouseLeave } from '../../gsap/utils';

const soc = [f, i, p, t];

export const Footer = () => {
   const onMouseEnter = ({ currentTarget }) => {
      mouseEnter(currentTarget);
   };

   const onMouseLeave = ({ currentTarget }) => {
      mouseLeave(currentTarget);
   };

   return (
      <FooterBox>
         <img
            src={logo}
            alt="лого"
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
