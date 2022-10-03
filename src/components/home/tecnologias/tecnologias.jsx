import { ConteudoTecnologias } from "./style";
import { EstiloDeTitulo } from "../stylesComponents/styleTitulos";


export function Tecnologias() {
  return (
    <ConteudoTecnologias>
      <EstiloDeTitulo>
        Tecnologias
        <img src="assets/svg/emojiTecnologias.svg" alt="" height="40px" />
      </EstiloDeTitulo>
      <div className="containerTecnologias">
        <div className="contaienerTecnologiasStatus">
          <img src="assets/img/html5.png"        alt=""  height="50px"/>
          <img src="assets/img/css3.png"         alt=""  height="50px"/>
          <img src="assets/img/js.png"           alt=""  height="50px"/>
          <img src="assets/img/bootstrap.png"    alt=""  height="50px"/>
          <img src="assets/img/sass.png"         alt=""  height="50px"/>
          <img src="assets/img/nextjs.png"       alt=""  height="50px"/>
          <img src="assets/img/react.png"        alt=""  height="50px"/>
          <img src="assets/img/github.png"        alt="" height="50px"/>
        </div>
        <div className="contaienerTecnologiasStatus">
          <img src="assets/img/nodejs.png" alt="" height="50px"/>
          <img src="assets/img/csharp.png" alt="" height="50px"/>
          <img src="assets/img/php.png" alt="" height="50px"/>
          <img src="assets/img/sql.png" alt="" height="50px"/>
          <img src="assets/img/mysql.png" alt="" height="50px"/>
          <img src="assets/img/figma.png" alt="" height="50px"/>
          <img src="assets/img/adobeXd.png" alt="" height="50px"/>
          <img src="assets/img/git.png" alt="" height="50px"/>
        </div>
        <div className="contaienerTecnologiasStatus">
          <img src="assets/img/microsoftazure.png" alt="" height="50px"/>
          <img src="assets/img/dot-net.png" alt="" height="50px"/>
          <img src="assets/img/trelo.png" alt="" height="50px"/>
          <img src="assets/img/c.png" alt="" height="50px"/>
          <img src="assets/img/typescript.png" alt="" height="50px"/>
          <img src="assets/img/cib_linux.png" alt="" height="50px"/>
        </div>
      </div>
    </ConteudoTecnologias>
  )
} 