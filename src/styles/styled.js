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
   margin-top: 110px;
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
   padding-top: 80px;
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

   display: flex;
   flex-direction: column;
   align-items: flex-end;

   padding-right: 110px;
   padding-bottom: 110px;
   position: relative;

   ${SectionTitleBox} {
      width: 800px;
      margin-top: 300px;
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
   div[title='gallery'] {
      width: 100%;
      padding: 50px;
      /* display: flex;
      justify-content: center; */

      img {
         border: 3px solid ${({ theme }) => theme.colors.mainAccent};
      }
   }
`;
