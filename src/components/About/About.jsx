import plate from '../../assets/img/about/about.png';
import { AboutBox } from '../../styles/styled';
import { SectionTitle } from '../SictionTitle/SectionTitle';

export const About = () => {
   return (
      <AboutBox>
         <SectionTitle title="about" />
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
