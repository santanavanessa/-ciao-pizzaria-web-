import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
*::before,
*::after {
  box-sizing: border-box;
}


* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100vh;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--scroll-padding, 50px);
    height: 100%;
  }

body {
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  background: ${({ theme }) => theme.colors["base-background"]};
  color: ${({ theme }) => theme.colors["base-text"]};

}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}



input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

h1,
h2,
h3 {
  line-height: 1;
}


    body, input, textarea, button {
        font-family: ${({ theme }) => theme.fonts.regular};
        font-weight: 400;
        font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    // Reset da estilização padrão de inputs

    input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }



  // Estilização da barra de navegação
  
  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["base-button"]}
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors["base-text"]};
  }


  section {
    padding-block: min(10vh, 10rem);
    display: flow-root;
  }

`;