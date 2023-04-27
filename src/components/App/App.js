import { useEffect, useState } from 'react';
import { Container } from '../../styles/styled';
import { About } from '../About/About';
import { Book } from '../Book/Book';
import { Enjoy } from '../Enjoy/Enjoy';
import { FoodQuality } from '../FoodQuality/FoodQuality';
import { Footer } from '../Footer/Footer';
import { GalleryComponent } from '../Gallery/Gallery';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Note } from '../Note/Note';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      const siteLoading = () => {
         setTimeout(() => setIsLoaded(true), 2000);
      };

      window.addEventListener('load', siteLoading);
      return () => window.removeEventListener('load', siteLoading);
   }, []);

   return (
      <>
         {!isLoaded ? (
            <Loader />
         ) : (
            <Container>
               <Header />
               <Hero />
               <About />
               <FoodQuality />
               <GalleryComponent />
               <Book />
               <Note />
               <Enjoy />
               <Footer />
            </Container>
         )}
      </>
   );
};
