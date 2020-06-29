import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";
import { theme } from "./theme";
import { normalize } from "styled-normalize";

export const LargeDesktop = 1700;
export const MacBook13 = 1441;
export const Desktop = 1296;
export const Laptop = 1172;
export const SmallLaptop = 992;
export const Tablet = 768;
export const Mobile = 750;
export const MobileMax = 414;
export const MobileSecondaryAndroid = 400;

export const customMedia = generateMedia({
  largeDesktop: "1700px",
  macBook13: "1441px",
  desktop: "1296px",
  laptop: "1172px",
  smallLaptop: "992px",
  tablet: "768px",
  mobile: "750px",
  mobileMax: "414px",
  mobileSecondaryAndroid: "400px",
  mobileSecondary: "375px",
});

// export const DarkTheme = {
//   background: theme.colors.black,
//   boxBackground: theme.secondaryColors.lightGrey30,
//   transparentBoxBackground: theme.secondaryColors.lightGrey40,
//   pageBackground: theme.secondaryColors.lightGrey30,
//   phoneMenuBackground: theme.secondaryColors.darkTransparent10,
// };

// export const LightTheme = {
//   background: theme.colors.navy,
//   boxBackground: theme.colors.black,
//   transparentBoxBackground: theme.colors.spaceBlack,
//   pageBackground: theme.colors.black,
//   phoneMenuBackground: theme.secondaryColors.lightGrey50,
// };

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }
  *:focus {
  outline: none;
  }

  html {
  /* Memo: Make root font size to 10px */
  /* font-size: 62.5% !important; */
  height: 100%;
  /* Memo: Hide side scroll bar for firefox */
  scrollbar-width: none;
}

/* html h1,h2,h3,h4,h5,h6,p,span,a{
  font-size: 62.5% !important;
} */

/* Memo: Root id for Next.js */
  #__next{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
/* Memo: To make footer attached to the bottom  */
  .Footer-pusher {
    flex: 1;
  }
  /* Memo: Remove scrollbar space */
  /* ::-webkit-scrollbar {
      width: 0px;
  } */

  body {
    background-size: auto;
    background-color: ${theme.colors.white};
    position: relative;
    padding: 0;
    margin: 0;
    font-style: normal;
    height: 100%;
    font-size: 1.6rem !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  /* Memo: Common styles */

  .Section-title {
    font-size: 2rem;
    margin-bottom: 6rem;
  }

  .Align-self-center {
    align-self: center;
  }
  .Center{
    text-align: center;
  }
  .Buttons {
    display: flex;
    ${customMedia.lessThan("mobileMax")`
      width: 100%;
      justify-content: space-between;
    `}
  }
  .Separator {
    margin: 0 2rem;
    ${customMedia.lessThan("mobileMax")`
      margin: 0;
    `}
  }
  .Wide-screen-only{
    ${customMedia.lessThan("smallLaptop")`
      display: none;
    `}
  }
  .Pointer{
    cursor: pointer;
  }
  .Not-allowed{
    cursor: not-allowed !important;
    opacity: 0.3;
  }
  .Mb-2rem {
    margin-bottom: 2rem !important;
  }
  .Mt-2rem {
    margin-top: 2rem;
  }
  .Hero-introduce {
    font-size: 2rem;
    line-height: 150%;
    ${customMedia.lessThan("mobileMax")`
      font-size: 1.8rem;
    `}
  }
  
  .Tablet{
    ${customMedia.lessThan("mobile")`
      display: none;
    `}
  }
  .Mobile{
    ${customMedia.greaterThan("mobile")`
      display: none;
    `}
  }
`;
