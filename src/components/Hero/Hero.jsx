import bigPlate from '../../assets/img/hero/bigPlate.png';
import currant from '../../assets/img/hero/currant.png';
import rosemary from '../../assets/img/hero/rosemary.png';
import smallPlate from '../../assets/img/hero/smallPlate.png';
import logo from '../../assets/img/logo.png';
import { HeroBox } from '../../styles/styled';

export const Hero = () => {
   return (
      <HeroBox>
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
         <p link="LearnMore">Learn more...</p>
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
            alt="big plate"
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
