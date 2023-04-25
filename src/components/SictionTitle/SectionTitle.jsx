import { SectionTitleBox } from '../../styles/styled';
import { Shape } from '../Shape/Shape';

export const SectionTitle = ({ title }) => {
   return (
      <SectionTitleBox>
         <Shape />
         <h2>{title} </h2>
         <Shape />
      </SectionTitleBox>
   );
};
