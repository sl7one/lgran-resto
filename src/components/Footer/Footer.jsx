import { FooterBox } from '../../styles/styled';
import logo from '../../assets/img/logo.png';
import f from '../../assets/img/socLinks/f.png';
import i from '../../assets/img/socLinks/i.png';
import p from '../../assets/img/socLinks/p.png';
import t from '../../assets/img/socLinks/t.png';

const soc = [f, i, p, t];

export const Footer = () => {
   return (
      <FooterBox>
         <img
            src={logo}
            alt="лого"
         />
         <nav>
            <p>ABOUT US</p>
            <p>MENU</p>
            <p>GALLERY</p>
            <p>BOOKINGS</p>
            <p>CONTACTS</p>
            <p>BLOG</p>
         </nav>

         <ul>
            {soc.map((el, idx) => (
               <li key={idx}>
                  <img
                     src={el}
                     alt="pic"
                  />
               </li>
            ))}
         </ul>
      </FooterBox>
   );
};
