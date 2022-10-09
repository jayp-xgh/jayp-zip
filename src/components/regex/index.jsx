import { LayoutRegex } from "./style"
import { EstiloDeTitulo } from "../titulo";

export function ContainerRegex() {
  return (
    <LayoutRegex>
      <div className="container-titulo">
        <h1>Regex</h1>
      </div>
      <div className="conteudo-regex">
        <p>
          Aqui você aprendera Regex de uma forma simples <br />
          04/10/2022
        </p>
        <img src="/assets/img/code.png" alt="" height="30%" width="100%" />
        <p>
          Nós programadore estaremos lidando com regex em algum momento. Seja para coisas comuns como validar cpf, email ou data e até mesmo para fazer parse em textos em busca de um determinado padrão.
          <br /> <br />
          Nessa doc, vou apresentar de forma simples e fácil como você pode criar suas próprias expressões regulares. Todos os exemplos serão feitos utilizando javascript, porém, muito das regex criadas aqui também funcionarão em outras linguagens como elixir, python, php ou ruby.
        </p>

        <div className="defina-regex">
          <EstiloDeTitulo>O que é uma expressão regular?</EstiloDeTitulo>
          <p>
            Explicando de uma forma simples:
            Com ela podemos lidar com as seguintes situação
          </p>
          <i className="sublinhado">
            Uma expressão regular é um método formal de se especificar um padrão de texto.
          </i>
          <ul>
            <li> • Procura;</li>
            <li> • Substituição;</li>
            <li> • Validação de formatos;</li>
            <li> • Filtragem de infotmações</li>
          </ul>
        </div>




        <EstiloDeTitulo>Vamos criar nosso primeiro Regex</EstiloDeTitulo>

        <p> Usando javascript podemos optar por duas formas de se criar uma regex. Podemos criar usando um constructor:</p>
        <p className="code">const regex = new RegExp("cachorro", "gi")</p>
        <p> Ou criando de forma literal: </p>
        <p className="code">const regex = /cachorro/gi</p>
        <p>Podemos buscar por somente uma letra:</p>
        <p className="code">
          pattern: /a/ <br />
          string:  A data de <span className="matches">a</span> aniversário. <br />
          matches:
        </p>
        <p>Ou buscar por uma palavra:</p>
        <p className="code">
          pattern: /fiat/ <br />
          string: &nbsp; O <span className="matches">fiat</span> está na promoção. <br />
          matches:
        </p>
        <p>
          Podemos ver que, na primeira regex, ela ignorou o primeiro A. Isso acontece porque as regex são case sensitive. Notamos também na primeira regex que só houve match na primeira ocorrência. Para lidar com isso, usaremos flags.
        </p>
        <i className="sublinhado"> Elas adicionam comportamentos adicionais a nossas regras, como: </i>
        <EstiloDeTitulo>Flags</EstiloDeTitulo>
        <ul className="container-flags">
          <li>
            <span>•</span>
            <b>g</b>
            <i className="sublinhado"> - indicar achar todas as ocorrências da regex</i>
          </li>
          <li>
            <span>•</span>
            <b>i</b>
            <i className="sublinhado"> - ignora case sensitive</i>
          </li>
          <li>
            <span>•</span>
            <b>m</b>
            <i className="sublinhado"> - multilinha, lida com caracteres de inicio e fim (^ e \$) ao operar em múltiplas linhas.</i>
          </li>
        </ul>
        <p>
          Podemos então obter todas as ocorrências com a flag g e em conjunto com a flag i podemos ignorar o case sensitive de uma busca:
        </p>
        <p className="code">
          pattern: /chuva/gi <br />
          string: &nbsp; A <span className="matches">chuva</span> estava forte então peguei meu guarda-<span className="matches">chuva</span> <br />
          matches:
        </p>
        <EstiloDeTitulo>Operador pipe "|“</EstiloDeTitulo>
        <p>
          Algumas vezes precisamos dar match em mais de um termo, para isso usamos o operador pipe | . Ele funciona basicamente como nosso operador lógico <i className="sublinhado">OR ||</i>. Assim podemos escrever:
        </p>
        <p className="code">
          pattern: /gosto|beber/gi <br />
          string: Eu amo e <span className="matches">Gosto </span> de <span className="matches">Beber</span> <br />
          matches: <br /> <br />

          pattern: /2002|Janeiro|Copa/gi <br />
          string: Nasci em Janeiro de 2002, em 2002 Brasil ganhou a copa <br />
          matches:         <br /> <br />

          pattern: /e|m|²/gi <br />
          string:  E = mc² <br />
          matches: 
        </p>





      </div>
    </LayoutRegex>
  )
}