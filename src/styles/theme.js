const sizes = {
   s: '18px',
   m: '24px',
};

const transition = (option) => `${option} 350ms ease-in-out`;

export const themeDark = {
   colors: {
      mainBlackBg: '#0e1111',
      mainWhiteBg: '#F9F9F9',
      mainAccent: 'orange',
      mainWhiteText: '#FFF',
      mainBlackText: '#0e1111',
      lamp: 'orange',
   },
   sizes,
   transition,
};

export const themeLight = {
   colors: {
      mainBlackBg: '#F9F9F9',
      mainWhiteBg: '#0e1111',
      mainAccent: '#0652ff',
      mainWhiteText: '#0e1111',
      mainBlackText: '#F9F9F9',
      lamp: '#0652ff',
   },
   sizes,
   transition,
};
