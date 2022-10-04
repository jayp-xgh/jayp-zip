import { ConteudoHistoria } from "./style";
import { EstiloDeTitulo } from "../stylesComponents/styleTitulos";


export function Historia() {
  return (
    <ConteudoHistoria>
      <EstiloDeTitulo>
        Historia
        <img src="assets/svg/emojiHistoria.svg" alt="" height="40px" />
      </EstiloDeTitulo>
      <p>
        Em 2019 conheci o mundo da programação, fiquei encantado, surpreso com as
        possibilidades de coisas que eu poderia fazer, tais coisas como, tornar o mundo em
        um lugar melhor de se viver, venho estudando e praticando constantemente para
        aperfeiçoar minhas hard skills e soft skills, meus primeiros passos foi na linguagem
        C, portanto possuo uma base rica e sólida, aprendi estrutura de dados, alocação de
        memória, manipulação de arrays e matrizes entre outras coisas. Hoje em dia me
        dedico diariamente ao desenvolvimento Front-end baseado em
        JavaScript/Typescript, desenvolvendo aplicações webs em React.js e Next.js.  Meu objetivo é se tornar referência na área de desenvolvimento, viabilizando a
        criação de softwares que mudam a vida das pessoas.
        <a href="/src/components/docs/joao.pdf" download className="container-cv">
          <span> Currículo</span>
          <img src="assets/svg/emojiCv.svg" alt="" height="30px" />
        </a>
      </p>
    </ConteudoHistoria>
  )
}