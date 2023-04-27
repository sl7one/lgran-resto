import { useTheme } from 'styled-components';
import { BookBox } from '../../styles/styled';
import { SectionTitle } from '../SictionTitle/SectionTitle';

import bookImg from '../../assets/img/book/book.png';

import Select from 'react-select';
import { CustomDropDownIndicator } from '../CustomDropDownIndicator/CustomDropDownIndicator';
import { mouseEnter, mouseLeave } from '../../gsap/utils';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const options = [
   { value: 2, label: '2 Persons' },
   { value: 3, label: '3 Persons' },
   { value: 4, label: '4 Persons' },
];
const optionsTime = [
   { value: 2, label: '10:00 am' },
   { value: 3, label: '10:30 am' },
   { value: 4, label: '11:00 am' },
];

const gsapAnimation = (el) =>
   gsap.fromTo(
      el,
      { opacity: 0, size: 1.25 },
      {
         opacity: 1,
         size: 1,
         scrollTrigger: {
            trigger: el,
            start: 'top 87%', //top элемента bottom вюпорта
            end: '100px center',
            scrub: 2,
         },
      }
   );

export const Book = () => {
   const theme = useTheme();
   const container = useRef(null);

   const styles = {
      container: (baseStyles) => ({
         ...baseStyles,
         backgroundColor: 'transparent',
         color: theme.colors.mainWhiteText,
         fontSize: '16px',
      }),
      control: (baseStyles, state) => ({
         ...baseStyles,
         backgroundColor: 'transparent',
         borderRadius: '10px',
         border: `2px solid ${theme.colors.mainAccent}`,
         transition: 'all 350ms ease-in',
         boxShadow: 'none',
         ':hover': {
            ...baseStyles[':hover'],
            border: `2px solid ${theme.colors.mainAccent}`,
         },
      }),
      dropdownIndicator: (baseStyles) => ({
         ...baseStyles,
         backgroundColor: 'transparent',
      }),
      indicatorSeparator: (baseStyles) => ({
         ...baseStyles,
         backgroundColor: 'transparent',
      }),
      menuList: (baseStyles) => ({
         ...baseStyles,
         backgroundColor: theme.colors.mainBlackBg,
         color: theme.colors.mainWhiteText,
         // transition: 'all 350ms ease-in',
      }),
      menu: (baseStyles) => ({
         ...baseStyles,
         backgroundColor: theme.colors.mainBlackBg,
         color: theme.colors.mainWhiteText,

         // transition: 'all 350ms ease-in',
      }),
      option: (baseStyles) => ({
         ...baseStyles,
         color: theme.colors.mainAccent,
         // transition: 'all 350ms ease-in',
         ':active': {
            ...baseStyles[':active'],
            backgroundColor: 'red',
         },
         ':hover': {
            ...baseStyles[':hover'],
            backgroundColor: `rgba(255,255,255,0.2)`,
         },
      }),
      input: (baseStyles) => ({
         ...baseStyles,
         padding: '10px',
         fontSize: '16px',
         color: theme.colors.mainWhiteText,
         outline: 'none',
         border: 'none',
      }),
      singleValue: (baseStyles) => ({
         ...baseStyles,
         padding: '10px',
         fontSize: '16px',
         color: theme.colors.mainWhiteText,
         outline: 'none',
         border: 'none',
      }),
   };

   useEffect(() => {
      const ctx = gsap.context((self) => {
         //scroll-trigger
         gsapAnimation(self.selector("[title='title']"));
         gsapAnimation(self.selector('[title="book"]'));
         gsapAnimation(self.selector('[title="input-top-left"]'));
         gsapAnimation(self.selector('[title="input-bottom-left"]'));
         gsapAnimation(self.selector('[title="input-top-right"]'));
         gsapAnimation(self.selector('[title="input-bottom-right"]'));
         gsapAnimation(self.selector('[type="submit"]'));

         gsap.fromTo(
            self.selector('[alt="book img"]'),
            { opacity: 0, filter: `blur(30px) grayscale(1)`, scale: 1.4, y: 100 },
            {
               opacity: 1,
               filter: `blur(0px) grayscale(0)`,
               scale: 0.8,
               y: 0,
               scrollTrigger: {
                  trigger: self.selector('[alt="book img"]'),
                  start: 'top center', //top элемента bottom вюпорта
                  end: '75% center',
                  // markers: true,
                  scrub: 2,
               },
            }
         );
      }, container);
      return () => ctx.revert();
   }, []);

   const onMouseEnter = ({ currentTarget }) => {
      mouseEnter(currentTarget);
   };

   const onMouseLeave = ({ currentTarget }) => {
      mouseLeave(currentTarget);
   };

   return (
      <BookBox ref={container}>
         <div title="title">
            <SectionTitle title="book now" />
         </div>
         <h3 title="book">Book Your Table Now And Have A Great Meal !</h3>
         <form>
            <div id="left-block">
               <div title="input-top-left">
                  <label htmlFor="name">Your full name ?</label>
                  <input
                     type="text"
                     id="name"
                     placeholder="Write your name here..."
                  />
               </div>
               <div title="input-bottom-left">
                  <label htmlFor="persons">How many people ?</label>
                  <Select
                     inputId="persons"
                     options={options}
                     styles={styles}
                     defaultValue={options[0]}
                     // components={{ DropdownIndicator: CustomOption }}
                  />
               </div>
            </div>
            <div id="right-block">
               <div title="input-top-right">
                  <label htmlFor="email">Your email address ?</label>
                  <input
                     type="text"
                     id="email"
                     placeholder="Write your email here..."
                  />
               </div>
               <div title="input-bottom-right">
                  <label htmlFor="time">What time ?</label>
                  <Select
                     inputId="time"
                     options={optionsTime}
                     styles={styles}
                     defaultValue={optionsTime[0]}
                     components={{
                        DropdownIndicator: CustomDropDownIndicator,
                     }}
                  />
               </div>
               {/* <div>
                  <label htmlFor="email">Your phone number ?</label>
                  <input
                     type="text"
                     id="phone"
                     placeholder="Write your phone here..."
                  />
               </div> */}
            </div>
         </form>
         <button
            type="submit"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
         >
            SUBMIT
         </button>

         <img
            src={bookImg}
            alt="book img"
         />
      </BookBox>
   );
};
