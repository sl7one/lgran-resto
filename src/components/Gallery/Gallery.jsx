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

const images = [
   { src: photo1, width: 3, height: 3 },
   { src: photo2, width: 2, height: 3 },
   { src: photo3, width: 3, height: 2 },
   { src: photo4, width: 3, height: 2 },
   { src: photo5, width: 3, height: 3 },
   { src: photo7, width: 2, height: 2 },
   { src: photo6, width: 3, height: 2 },
];

export const GalleryComponent = () => {
   return (
      <GalleryBox>
         <SectionTitle title="gallery" />
         <div title="gallery">
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
