import styled from "styled-components"

export const ConteudoFormacoes = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: max(50px, 5vw);
  padding-left: 10px;
  padding-right: 10px;
  height: 80vh;
  width: 100%;

  .containerFormacoes{
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    width: 100%;
  }
  
  .contaienerFormacoesStatus{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    h3{
      color:#687AF1;
      font-weight: 600;
      width: 400px;
    }
    span{
      font-weight: 600;
      width: 1px;
    }
  }
`