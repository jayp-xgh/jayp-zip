import { createGlobalStyle } from "styled-components";
const EstiloGlobal = createGlobalStyle`
  *,body, html {
    margin: 0;
    top: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
    font-weight: 400;
    font-size: max(18px, 1.5vw);
    color: #AAAAAA;
  }
  .App {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -100px;
  }
  body::-webkit-scrollbar {
    width: 5px;               
  }
  body::-webkit-scrollbar-track {
    background-color: #fff;
  }
  body::-webkit-scrollbar-thumb {
    background: #7F37FC;     
    border-radius: 20px;       
  }
`;
export default EstiloGlobal;
