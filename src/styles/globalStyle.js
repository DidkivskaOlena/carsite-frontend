import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  overflow-x: hidden;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: ${(p) => p.theme.fonts.main};
  background-color: ${(p) => p.theme.colors.background};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(p) => p.theme.colors.background};
    border-radius: ${(p) => p.theme.borders.normal};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.yellow};
    border-radius: ${(p) => p.theme.borders.normal};
  }

}

body, .hidden {
  transition: opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);

ul, ol{
  margin: 0;
  padding: 0;
  list-style: none;
}

h1, h2, h3, h4, h5, h6, p{
  margin: 0;
}

table {
  text-indent: 0;
  border-color: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button{
  cursor: pointer;
  border: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
};

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
};

.fade-in {
  animation: fadeIn 0.5s ease-in-out forwards;
};

.fade-out {
  animation: fadeOut 0.5s ease-in-out forwards;};

// .Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
// .Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
// .Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
// .Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
//   color: ${(p) => p.theme.colors.yellow};
//   background-color: ${(p) => p.theme.colors.lightGrey};
// }
`;