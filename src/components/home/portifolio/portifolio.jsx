import { ConteudoPortifolio } from "./style";
import { EstiloDeTitulo } from "../stylesComponents/styleTitulos";


export function Portifolio() {
  return (
    <ConteudoPortifolio>
      <EstiloDeTitulo>
        Portifólio
        <img src="/src/assets/svg/emojiHistoria.svg" alt="" height="40px" />
      </EstiloDeTitulo>

      <div className="containerConteudoPortifolio">
        <div className="conteudoPortifolio"></div>
        <div className="conteudoPortifolio"></div>
        <div className="conteudoPortifolio"></div>
      </div>
    </ConteudoPortifolio>
  )
}