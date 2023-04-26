export const CustomDropDownIndicator = () => {
   return (
      <div
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
         }}
      >
         <svg
            viewBox="0 0 20 20"
            fill="white"
            width={20}
            height={20}
         >
            <path d="M10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0zM10 18c4.418 0 8-3.582 8-8s-3.582-8-8-8v0c-4.418 0-8 3.582-8 8s3.582 8 8 8v0zM9 10.41v-6.41h2v5.59l3.95 3.95-1.41 1.41-4.54-4.54z"></path>
         </svg>
      </div>
   );
};
