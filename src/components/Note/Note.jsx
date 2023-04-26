import { NoteBox } from '../../styles/styled';
import noteBg from '../../assets/img/quoteBg.png';

export const Note = () => {
   return (
      <NoteBox>
         <span>&#8223;</span>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
         </p>

         <p title="author">Linda Steward</p>
         <img
            src={noteBg}
            alt="bg"
         />
      </NoteBox>
   );
};
