import styled from "styled-components";

export const ConteudoBlog = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: max(50px, 5vw);
  padding-left: 10px;
  padding-right: 10px;
  height: 100vh;

  #blog {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      background: -webkit-linear-gradient(to left, #7c38fc, #5256ff);
      background: linear-gradient(to right, #7c38fc, #5256ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: max(60px, 7vw);
      font-weight: 900;
    }
  }
  p {
    max-width: 700px;
    min-width: 300px;
    text-align: center;
    font-weight: 500;
  }

  .containerJoaizinhoDev {
    display: flex;
    align-items: center;
    grid-gap: 20px;
    justify-content: center;
    border-radius: 100px;
    background-color: #fff;
    position: relative;
    padding: 5px 15px;
    span {
      font-weight: 600;
    }
  }
  .containerJoaizinhoDev::before,
  .containerJoaizinhoDev::after {
    content: "";
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    border-radius: 100px;
    background: linear-gradient(to right, #7c38fc, #5256ff);
  }
`;
