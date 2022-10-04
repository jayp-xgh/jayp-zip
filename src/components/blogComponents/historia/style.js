import styled from "styled-components";

export const ConteudoHistoria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: max(50px, 5vw);
  width: 100%;

  p {
    width: 80%;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    grid-gap: 40px;
  }
  .container-cv {
    display: flex;
    align-items: center;
    grid-gap: 20px;
    justify-content: center;
    border-radius: 100px;
    background-color: #fff;
    position: relative;
    padding: 5px 15px;
    width: 300px;

    span {
      background: -webkit-linear-gradient(to left, #7c38fc, #5256ff);
      background: linear-gradient(to right, #7c38fc, #5256ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }
  }
  .container-cv::before,
  .container-cv::after {
    content: "";
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    border-radius: 100px;
    background: linear-gradient(to right, #7c38fc, #5256ff);
  }
  @media screen and (max-width: 500px) {
    .container-cv {
      width: 200px;
    }
  }
`;
