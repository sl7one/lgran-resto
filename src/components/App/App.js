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

export const App = () => {
   return (
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
   );
};
