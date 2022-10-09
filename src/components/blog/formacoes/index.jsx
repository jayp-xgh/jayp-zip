import { ConteudoFormacoes } from "./style";
import { EstiloDeTitulo } from "../../titulo";

export function Formacoes() {
  return (
    <ConteudoFormacoes>
      <EstiloDeTitulo>
        Formações
        <img src="assets/svg/formacoes.svg" alt="" height="40px" />
      </EstiloDeTitulo>

      <div className="containerFormacoes">
        <div className="contaienerFormacoesStatus">
          <h3>Ensino Médio</h3>
          {/* <span>Completo</span> */}
        </div>
        <div className="contaienerFormacoesStatus">
          <h3>Análise e Desenvolvimento de Sistemas</h3>
          {/* <span>Completo</span> */}
        </div>
        <div className="contaienerFormacoesStatus">
          <h3>Fundaçào Bradesco</h3>
          {/* <span>Completo</span> */}
        </div>
        <div className="contaienerFormacoesStatus">
          <h3>Udemy - JavaScript | Typecript</h3>
          {/* <span>Andamento</span> */}
        </div>
      </div>
    </ConteudoFormacoes>
  )
} 