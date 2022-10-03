import styled from "styled-components"
export const ConteudoPortifolio = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: max(50px, 5vw);
  padding-left: 10px;
  padding-right: 10px;
  height: 80vh;
  width: 100%;

  .containerConteudoPortifolio{
    background-color: red;
    padding: 10px;
    display: flex;
    grid-gap: 30px;
    width: 50%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    .conteudoPortifolio{
      background-color: pink;
      width: 1000px;
      height: 500px;
    }
  }
`