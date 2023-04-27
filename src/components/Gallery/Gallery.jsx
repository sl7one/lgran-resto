import Gallery from 'react-photo-gallery';

import photo1 from '../../assets/img/gallery/photo1.png';
import photo2 from '../../assets/img/gallery/photo2.png';
import photo3 from '../../assets/img/gallery/photo3.png';
import photo4 from '../../assets/img/gallery/photo4.png';
import photo5 from '../../assets/img/gallery/photo5.png';
import photo6 from '../../assets/img/gallery/photo6.png';
import photo7 from '../../assets/img/gallery/photo7.png';
import { GalleryBox } from '../../styles/styled';
import { SectionTitle } from '../SictionTitle/SectionTitle';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { mouseEnter, mouseLeave } from 'gsap/utils';

const images = [
   { src: photo1, width: 3, height: 3, alt: 'photo1' },
   { src: photo2, width: 2, height: 3, alt: 'photo2' },
   { src: photo3, width: 3, height: 2, alt: 'photo3' },
   { src: photo4, width: 3, height: 2, alt: 'photo4' },
   { src: photo5, width: 3, height: 3, alt: 'photo5' },
   { src: photo7, width: 2, height: 2, alt: 'photo7' },
   { src: photo6, width: 3, height: 2, alt: 'photo6' },
];

export const GalleryComponent = () => {
   const container = useRef(null);
   const titleRef = useRef(null);
   const galleryContainer = useRef(null);

   useEffect(() => {
      const parent = document.querySelector(`[title="gallery"]`);
      const ctx = gsap.context(() => {
         setTimeout(() => {
            const gallery = parent.querySelectorAll('img');

            [...gallery].forEach((el) => {
               el.addEventListener('mouseenter', ({ currentTarget }) =>
                  mouseEnter(currentTarget)
               );
               el.addEventListener('mouseleave', ({ currentTarget }) =>
                  mouseLeave(currentTarget)
               );
            });
            gsap.fromTo(
               gallery,
               { y: 'random(-200,200)', x: 'random(200,-200)' },
               {
                  y: 0,
                  x: 0,
                  scrollTrigger: {
                     trigger: galleryContainer.current,
                     // start: 'top 65%',
                     // end: 'bottom bottom',
                     // markers: true,
                     scrub: 2,
                     stagger: 0.1,
                  },
               }
            );
            gsap.fromTo(
               titleRef.current,
               { opacity: 0, y: -100 },
               {
                  opacity: 1,
                  y: 0,
                  scrollTrigger: {
                     trigger: titleRef.current,
                     start: 'top center', //top элемента bottom вюпорта
                     end: '300px center',
                     // markers: true,
                     scrub: 2,
                  },
               }
            );
         }, 500);
      }, container);
      return () => ctx.revert();
   }, []);

   return (
      <GalleryBox ref={container}>
         <div ref={titleRef}>
            <SectionTitle title="gallery" />
         </div>

         <div
            title="gallery"
            ref={galleryContainer}
         >
            <Gallery
               photos={images}
               direction={'column'}
               margin={10}
               columns={3}
            />
         </div>
      </GalleryBox>
   );
};
