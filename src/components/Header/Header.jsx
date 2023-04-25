import logo from '../../assets/img/logo.png';
import { HeaderBox } from '../../styles/styled';

export const Header = () => {
   return (
      <HeaderBox>
         <nav>
            <p>ABOUT US</p>
            <p>MENU</p>
            <p>GALLERY</p>
         </nav>
         <img
            src={logo}
            alt="лого"
         />
         <nav>
            <p>BOOKINGS</p>
            <p>CONTACTS</p>
            <p>BLOG</p>
         </nav>
      </HeaderBox>
   );
};
