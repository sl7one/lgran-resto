import { Container } from '../../styles/styled';
import { About } from '../About/About';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';

export const App = () => {
   return (
      <Container>
         <Header />
         <Hero />
         <About />
      </Container>
   );
};
