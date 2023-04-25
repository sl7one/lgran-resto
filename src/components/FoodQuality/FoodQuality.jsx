import plateWithHoney from '../../assets/img/foodQuality/foodQuality.png';
import { FoodQualityBox } from '../../styles/styled';
import { SectionTitle } from '../SictionTitle/SectionTitle';

export const FoodQuality = () => {
   return (
      <FoodQualityBox>
         <SectionTitle title="our food quality" />
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
