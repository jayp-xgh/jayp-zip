import styled from "styled-components";
export const Nav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #fff;
  z-index: 3;

  .containerNavOpcao {
    display: flex;
    align-items: center;
    grid-gap: 50px;
  }
  .containerGithub {
    display: flex;
    align-items: center;
    grid-gap: 20px;
    justify-content: center;
    border-radius: 100px;
    background-color: #fff;
    position: relative;
    padding: 5px 15px;
  }
  .containerGithub::before,
  .containerGithub::after {
    content: "";
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    border-radius: 100px;
    background: linear-gradient(to right, #7c38fc, #5256ff);
  }
  span {
    background: -webkit-linear-gradient(to left, #7c38fc, #5256ff);
    background: linear-gradient(to right, #7c38fc, #5256ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
  }
  .active {
    font-weight: 700;
  }

  @media screen and (max-width: 470px) {
    .containerNavOpcao {
      grid-gap: 25px;
    }
  }
`;
