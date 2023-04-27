import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { LoaderBox } from 'styles/styled';

export const Loader = () => {
   const container = useRef(null);

   useEffect(() => {
      gsap.context((self) => {
         gsap.fromTo(
            self.selector("[title='box']"),
            { scale: 3, backgroundColor: 'white' },
            { scale: 0, ease: 'power3.out', duration: 2 }
         );
      }, container);
   }, []);

   return (
      <LoaderBox ref={container}>
         <div title="box">
            <p>LOADING ...</p>
         </div>
      </LoaderBox>
   );
};
