import styled from "styled-components"
export const ConteudoPortifolio = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: max(50px, 5vw);
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  margin-top: 100px;

  .containerConteudoPortifolio{
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 30px;
    width: 100%;
    flex-wrap: wrap;

    .conteudoPortifolio{
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid 1px #aaaaaa;
    }
  }
`