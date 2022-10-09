import styled from "styled-components";

export const LayoutRegex = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  align-items: center;
  height: 500vh;

  .container-titulo{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    background: -webkit-linear-gradient(to left, #7c38fc, #5256ff);
    background: linear-gradient(to right, #7c38fc, #5256ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: max(60px, 7vw);
    font-weight: 900;
  }
  .conteudo-regex{
    display: flex;
    grid-gap: 50px;
    flex-direction: column;
    width: 80%;
  }
  .defina-regex{
    display: flex;
    flex-direction: column;
    grid-gap: 30px;
  }
  .sublinhado{
    color: #687AF1;    
    font-weight: 700;
  }
  p{
    font-weight: 500;
  }
  .code{
    width: 100%;
    height: auto;
    padding: 20px;
    background-color: #D4E5FF;
    color: #000000;
    font-weight: 600;
  }
  .container-flags{
    display: flex;
    flex-direction: column;
    grid-gap: 10px;

    li{
      display: flex;
      flex-direction: row;
      grid-gap: 10px;
      align-items: center;
      
      span{
        color: #000000;
        font-weight: 800;
      }
      
      b{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background-color: #D4E5FF;
        border-radius: 3px;
        font-weight: 700 ;
        color: #000000;
      }
    }
  }
  .matches{
    position: relative;
    color: #5256ff;
    font-weight: 900;
  }
  .matches::after{
    content: "^^^^^";
    color: #5256ff;
    display: flex;
    flex-direction:row;
    width: 120%;
    left: 0;
    justify-content: space-between;
    position: absolute;
    letter-spacing: 1px;
  }
`;
