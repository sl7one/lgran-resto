import styled from 'styled-components';

import bgBlackTexture from '../assets/img/bgBlackTexture.png';
import bgGrayTexture from '../assets/img/bgGrayTexture.png';

export const Container = styled.div`
   width: 1440px;
   margin: 0 auto;
   background-color: ${({ theme }) => theme.colors.mainBlackBg};
   color: ${({ theme }) => theme.colors.mainWhiteText};
   position: relative;
`;
export const HeaderBox = styled.div`
   background-color: ${({ theme }) => theme.colors.mainGrayBg};
   display: flex;
   justify-content: center;
   gap: 100px;
   padding: 20px;
   align-items: center;
   position: absolute;
   top: 80px;
   left: 50%;
   transform: translateX(-50%);
   width: 100%;
   z-index: 1;

   nav {
      display: flex;
      gap: 25px;
      color: ${({ theme }) => theme.colors.mainGrayText};
   }

   img {
      width: 180px;
      height: 80px;
   }
`;
export const HeroBox = styled.div`
   background-image: url(${bgBlackTexture});
   background-repeat: no-repeat;
   background-size: cover;

   padding-top: 240px;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   padding-right: 150px;
   position: relative;

   h2 {
      margin-top: 250px;
      font-size: 55px;
      text-transform: uppercase;
      text-align: right;
   }

   p[link='LearnMore'] {
      margin-top: 20px;
      color: ${({ theme }) => theme.colors.mainAccent};
      font-size: 40px;
      text-transform: uppercase;
   }

   img[alt='logo'] {
      margin-top: 90px;
      width: 350px;
      height: 150px;
   }

   p[text='bottom'] {
      margin-top: 90px;
      margin-bottom: 90px;
      font-size: 55px;
      position: relative;

      &::after {
         content: '';
         display: flex;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         width: 600px;
         height: 150px;
         background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8044467787114846) 100%
         );
      }

      span {
         color: ${({ theme }) => theme.colors.mainAccent};
      }
   }

   img[alt='small plate'] {
      position: absolute;
      top: 20%;
      left: 0;
      width: 380px;
   }
   img[alt='big plate'] {
      position: absolute;
      top: 50%;
      left: 12%;
      width: 650px;
   }
   img[alt='rosemary'] {
      position: absolute;
      top: 30%;
      left: 25%;
      width: 135px;
   }
   img[alt='currant'] {
      position: absolute;
      top: 33%;
      left: 33%;
      width: 185px;
   }
`;
export const ShapeImg = styled.img`
   width: 65px;
`;
export const SectionTitleBox = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   /* margin-top: 110px; */
   gap: 50px;

   h2 {
      text-transform: uppercase;
      font-size: 55px;
   }
`;
export const AboutBox = styled.div`
   background-image: url(${bgGrayTexture});
   background-repeat: no-repeat;
   background-size: cover;
   position: relative;
   padding-top: 160px;
   padding-bottom: 80px;
   padding-left: 110px;

   p[text='about'] {
      width: 580px;
      font-size: 18px;
      text-align: center;
      margin-top: 110px;
      line-height: 1.5;
   }
   p[text='visit'] {
      font-size: 35px;
      margin-top: 110px;
      width: 580px;
      text-align: center;

      span {
         color: ${({ theme }) => theme.colors.mainAccent};
      }
   }

   img[alt='plate with waffles'] {
      width: 750px;
      position: absolute;
      bottom: 0;
      right: 0;
   }

   ${SectionTitleBox} {
      width: 580px;
   }
`;
export const FoodQualityBox = styled.div`
   background-image: url(${bgBlackTexture});
   background-repeat: no-repeat;
   background-size: cover;
   overflow-y: hidden;

   display: flex;
   flex-direction: column;
   align-items: flex-end;

   padding-right: 110px;
   padding-bottom: 110px;
   position: relative;
   padding-top: 300px;

   ${SectionTitleBox} {
      width: 800px;
   }

   p[title='text'] {
      width: 800px;
      text-align: center;
      margin-top: 90px;
   }

   p[title='seo'] {
      width: 800px;
      font-size: 50px;
      text-transform: uppercase;
      text-align: center;
      margin-top: 90px;

      span {
         display: block;
      }
      span:nth-of-type(2) {
         font-size: 38px;
         margin-top: 10px;
      }
      span:nth-of-type(3) {
         font-size: 30px;
         color: ${({ theme }) => theme.colors.mainAccent};
         margin-top: 10px;
      }
   }

   img[alt='plate With Honey'] {
      width: 650px;
      position: absolute;
      top: 0;
      left: 7%;
   }
`;
export const GalleryBox = styled.div`
   padding-top: 90px;
   div[title='gallery'] {
      width: 80%;
      padding: 50px;
      margin: 0 auto;

      img {
         border: 3px solid ${({ theme }) => theme.colors.mainAccent};
      }
   }
`;
export const BookBox = styled.div`
   background-image: url(${bgBlackTexture});
   background-repeat: no-repeat;
   background-size: cover;

   padding-top: 110px;
   padding-bottom: 110px;

   div[id='left-block'] {
      display: flex;
      flex-direction: column;
      gap: 50px;
   }

   div[id='right-block'] {
      display: flex;
      flex-direction: column;
      gap: 50px;
   }

   h3 {
      margin-top: 85px;
      font-size: 35px;
      text-align: center;
   }

   form {
      display: flex;
      justify-content: space-between;
      width: 1100px;
      margin: 0 auto;
      margin-top: 90px;

      label {
         font-size: 20px;
         display: block;
         margin-bottom: 15px;
      }

      input {
         font-size: 16px;
         padding: 10px;
         border: 2px solid ${({ theme }) => theme.colors.mainAccent};
         border-radius: 10px;
         color: white;
         width: 420px;
         letter-spacing: inherit;
      }

      svg {
         fill: ${({ theme }) => theme.colors.mainAccent};
      }
   }

   button {
      margin: 90px auto;
      color: ${({ theme }) => theme.colors.mainWhiteText};
      background-color: ${({ theme }) => theme.colors.mainAccent};
      padding: 15px;
      width: 300px;
      border-radius: 20px;
   }
`;
export const NoteBox = styled.div`
   background-image: url(${bgBlackTexture});
   background-repeat: no-repeat;
   background-size: cover;
   overflow: hidden;

   display: flex;
   flex-direction: column;
   align-items: center;

   padding-top: 60px;
   padding-bottom: 60px;

   position: relative;

   span {
      display: block;
      font-size: 250px;
      margin: 0 auto;
      color: ${({ theme }) => theme.colors.mainAccent};
   }

   p {
      width: 750px;
      text-align: center;
   }
   p[title='author'] {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.mainAccent};
      font-size: 35px;
      margin-top: 60px;
   }

   img {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
   }
`;
export const EnjoyBox = styled.div`
   background-image: url(${bgGrayTexture});
   background-repeat: no-repeat;
   background-size: cover;

   padding: 210px 0 210px 110px;

   position: relative;

   h2 {
      font-size: 35px;
      text-align: center;

      width: 600px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.mainAccent};
   }
   p[title='text'] {
      margin-top: 60px;
      width: 600px;
      text-align: center;
   }
   p[title='enjoy'] {
      font-size: 35px;
      text-align: center;
      width: 600px;
      text-transform: uppercase;
      margin-top: 60px;
      color: ${({ theme }) => theme.colors.mainAccent};
   }
   img {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
   }
`;
export const FooterBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   padding: 110px;

   border-top: 8px dotted ${({ theme }) => theme.colors.mainAccent};

   nav {
      display: flex;
      gap: 20px;
      margin-top: 90px;
   }

   ul {
      display: flex;
      gap: 50px;
      margin-top: 90px;
   }
`;
