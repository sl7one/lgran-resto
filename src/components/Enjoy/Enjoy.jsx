import { EnjoyBox } from '../../styles/styled';
import enjoy from '../../assets/img/enjoy/enjoy.png';
export const Enjoy = () => {
   return (
      <EnjoyBox>
         <h2>Enjoy Our Best Meal</h2>
         <p title="text">
            Lorem ipsum dolor sit amet, cosectetur adi piscing elit, sed do eiusmod tempor
            incididunt ut labore etdolore magna sed do eiusmod tempor incididunt ut labore
            etdolore
         </p>
         <p title="enjoy">CONTACT US NOW</p>
         <img
            src={enjoy}
            alt="enjoy"
         />
      </EnjoyBox>
   );
};
