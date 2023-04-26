import { useTheme } from 'styled-components';
import { BookBox } from '../../styles/styled';
import { SectionTitle } from '../SictionTitle/SectionTitle';

import bookImg from '../../assets/img/book/book.png';

import Select from 'react-select';
import { CustomDropDownIndicator } from '../CustomDropDownIndicator/CustomDropDownIndicator';

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

export const Book = () => {
   const theme = useTheme();

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
   return (
      <BookBox>
         <SectionTitle title="book now" />
         <h3>Book Your Table Now And Have A Great Meal !</h3>
         <form>
            <div id="left-block">
               <div>
                  <label htmlFor="name">Your full name ?</label>
                  <input
                     type="text"
                     id="name"
                     placeholder="Write your name here..."
                  />
               </div>
               <div>
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
               <div>
                  <label htmlFor="email">Your email address ?</label>
                  <input
                     type="text"
                     id="email"
                     placeholder="Write your email here..."
                  />
               </div>
               <div>
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
         <button type="submit">SUBMIT</button>

         <img
            src={bookImg}
            alt="book img"
         />
      </BookBox>
   );
};
