import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root {
      --yellow: #E6C619;

      --yellow-2: rgba(174, 151, 25, 0.89);


      --wine: #B50C27;
      --wine-2: #8c0614;
      --wine-3: #94163B;
      --wine-4: #630000;
      --wine-5: #590005;
      --wine-6: #420609;



      --header-button-2: #590005;

      --rules-back: rgb(140, 6, 20, 0.78);
      --rules-back-subtitle: #8C0614;

      /* Cores adicionais para desenvolvimento */
      --ligth-green: #98FF96;
      --dark-green: #068C23;

      --light-grey: #C3BFBF;
      --medium-grey: #676161;
      --dark-grey: #333333;

      --light-pink: #E0CCD2;

      --white: #f5f5f5;

   }

   body {
      font-family: 'Inter', sans-serif;
   }

   h2, h3, button {
      font-family: 'Karantina', cursive;
   }

   .container {
      width: 100%;
      max-width: 1168px;
      margin: auto;
      padding: 0 16px;
   }

   ul, ol {
      list-style: none;
   }

   a {
      text-decoration: none;
   }

   input, button, select, textarea {
      /* font */
   }

   h2 {
      @media (max-width: 480px) {
         font-size: 44px !important;
      }
   }
`;

export default GlobalStyle;
