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
          string:  A d<mark>a</mark>ta de a aniversário. <br />
        </p>
        <p>Ou buscar por uma palavra:</p>
        <p className="code">
          pattern: /fiat/ <br />
          string: &nbsp; O <mark >fiat</mark> está na promoção. <br />
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
          string: &nbsp; A <mark >chuva</mark> estava forte então peguei meu guarda-<mark >chuva</mark> <br />

        </p>
        <EstiloDeTitulo>Operador pipe "|“</EstiloDeTitulo>
        <p>
          Algumas vezes precisamos dar match em mais de um termo, para isso usamos o operador pipe | . Ele funciona basicamente como nosso operador lógico <i className="sublinhado">OR ||</i>. Assim podemos escrever:
        </p>
        <p className="code">
          pattern: /gosto|beber/gi <br />
          string: Eu amo e <mark > Gosto </mark> de <mark >Beber</mark>
          <br /><br /> <br />

          pattern: /2002|Janeiro|Copa/gi <br />
          string: Nasci em <mark >Janeiro</mark> de <mark >2002</mark>, em <mark > 2002</mark> Brasil ganhou a <mark >copa</mark>
          <br /><br /> <br />

          pattern: /e|m|²/gi <br />
          string:  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<mark >E</mark> = <mark >m</mark>c<mark >²</mark>
          <br />

        </p>
        <p>
          Uma funcionalidade interessante é de adicionar range (invervalos) dentro dos nossos conjuntos. Podemos determinar um conjunto de match em letras que vão de <mark>A</mark> à <mark>Z</mark> ou pegue qualquer digito <mark>(0 à 9)</mark>.
        </p>
        <p className="code">
          pattern: /[a-z]/ <br />
          string:  J<mark>o</mark>ã<mark>o</mark> V<mark>itor</mark> P<mark>ereira</mark>
          <br /><br /><br />

          pattern: /[A-Za-z]/ <br />
          string:  <mark>A</mark>ç<mark>ucar e Caf</mark>é
          <br /><br /><br />

          pattern: /[0-9.,]/ <br />
          string:  Um ps<mark>5</mark> custa R$ <mark>5</mark>.<mark>600</mark>,<mark>00</mark>
        </p>
        <p>
          Um detalhe a ser observado é que o range obedece a mesma ordem da tabela Unicode, sendo assim regex como <mark>[a-Z]</mark>  ou  <mark>[4-1]</mark> produziram erro, pois ambas não estão na ordem correta da tabela Unicode.
          Podemos também dar match em letras com acentos <mark>(é-à)</mark> ou <mark>(ç)</mark> usando:
        </p>
        <p className="code">
          pattern: /[À-ü]/ <br />
          string: <mark>Açaí é melhor que Flocos</mark>
        </p>
        <p>
          Temos também os conjuntos negados, que como o nome sugere, dar match em tudo que não faça parte do conjunto. Para definí-lo iniciamos a regra do conjunto com <mark>^</mark>, por exemplo <mark>[^a-z]</mark> que aceita tudo que não seja entre a à z. Vejamos um exemplo:
        </p>
        <p className="code">
          pattern: /[^aeiouí]/gi <br />
          string:  <mark>P</mark>a<mark>r</mark>a<mark>l</mark>e<mark>l</mark>e<mark>p</mark>ípe<mark>d</mark>o
        </p>
        <EstiloDeTitulo>Metacaracteres</EstiloDeTitulo>
        <p>
          Nas regex existem duas formas de caracteres, os literais, que representam o valor literal do caractere como <mark>abc123</mark>  e os metacaracteres que possuem funções distintas dentro de um contexto na regex. Dois exemplos que acabamos de ver são o uso do <mark>^</mark> iniciando um conjunto negado e o uso do - em uma regra de conjunto com range <mark>[1-9]</mark>. Um metacaractere bastante recorrente é o ponto ., ele funciona como um coringa, sendo capaz de dar match em qualquer caractere, vejamos um exemplo:
        </p>
        <p className="code">
          pattern: /cas./gi <br />
          string:  <mark>Casa</mark>,<mark>caso</mark>,<mark>case</mark>
        </p>
        <p>
          Visto isso, você deve estar se perguntando: Como pegar a forma literal do ponto? Eis que é muito simples bastando usar um escape \ mais o metacaractere desejado. Vejamos um exemplo:
        </p>
        <p className="code">
          pattern: /[a\-o]/gi <br />
          string:  c<mark>a</mark>ch<mark>o</mark>rr<mark>o-</mark>quente.
        </p>
        <p>
          Para simplificar a escrita e leitura das regex, possuímos algumas shorthands que são extremamente úteis para deixar ainda mais claro nosso código. Veja como podemos escrever esse conjunto <mark>[0-9]</mark> para <mark>\d</mark>,  <mark>[a-zA-Z0-9_]</mark> para <mark>\w</mark> ou para tratar espaços em branco <mark>[\r\n\t\f\v ]</mark> para <mark>\s</mark> simplificando ainda mais nossas regras. Vejamos alguns exemplos:
        </p>
        <p className="code">
          pattern: /\(\d\d\)\s\d\d\d\d\d-\d\d\d\d/ <br />
          string:  <mark>(86) 95262-7297</mark>
          <br /><br /><br />
          pattern: /\w\w\w\w\w@\w\w\.com/ <br />
          string:  <mark>ax_a5@5x.com</mark>
        </p>
        <p>
          Para um guia de consulta, criei um gist contendo muitos metacaracteres e shorthands e seus respectivos significado.
        </p>
        <EstiloDeTitulo>Quantificadores</EstiloDeTitulo>
        <p>
          Uma maneira de deixar suas regras ainda mais simples é com o uso dos quantificadores. Com eles podemos dizer quantas vezes uma mesma regra pode aparecer em sequência. Vejamos elas:
        </p>
        <ul className="container-flags">
          <li>
            <span>•</span>
            <b>?</b>
            <i className="sublinhado"> -  zero ou um ocorrência</i>
          </li>
          <li>
            <span>•</span>
            <b>*</b>
            <i className="sublinhado"> - zero ou mais ocorrências</i>
          </li>
          <li>
            <span>•</span>
            <b>+</b>
            <i className="sublinhado"> - uma ou mais ocorrências</i>
          </li>
          <li>
            <span>•</span>
            <b>{'{ n,m }'}</b>
            <i className="sublinhado"> - de n até m</i>
          </li>
        </ul>
        <i className="sublinhado">
          Seu uso é simples, basta adicionar o quantificador após um caractere, metacaractere, conjunto ou mesmo um grupo (ainda veremos abaixo). Exemplo <mark>[0-9]? \w\* a+</mark> e <mark> (\d){'{ 1, 3 }'}</mark>.
        </i>
        <p>
          Digamos que queremos pegar um documento como o cpf, que contêm muitos números e pontuações( <mark>.</mark> e <mark>-</mark>) onde a validação pode aceitar o cpf com e sem pontuação, ficando deste modo:
        </p>
        <p className="code">
          pattern: /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/ <br />
          string:  <mark>825.531.760-07 </mark> <br />
          string:  <mark>18646661024 </mark>
        </p>
        <p>
          Como podemos pegar uma repetição de caractere sem estipular algum limite, vejamos:
        </p>
        <p className="code">
          pattern: /go+l+/gi <br />
          string:  <mark>Goolllll</mark> da Alemanha!!!
        </p>
        <EstiloDeTitulo>Âncoras</EstiloDeTitulo>
        <p>
          Muitas vezes vamos precisar delimitar a ação da nossa regex. Desse modo podemos usar três metas para nos auxiliar nessa função.
          Quando queremos tratar uma palavra que em suas extremidades não possua outra letra ou palavra, usamos a shorthands
          <mark> \b</mark>.
        </p>
        <p className="code">
          pattern: /\bpar\b/gi <br />
          string:  Parcela <mark>par</mark> Parcial paraíso
          <br /><br /><br />
          pattern: /\bpar[a-z]+/gi <br />
          string:  <mark>Parei parque</mark> topar
          <br /><br /><br />
          pattern: /[a-z]+par\b/gi <br />
          string:  parodiado <mark> escapar equipar </mark> parasitar
          <br /><br /><br />
          pattern: /\b[a-z]+par[a-z]+\b/gi <br />
          string:  limpar <mark> aparto aparta </mark>
        </p>
        <i className="sublinhado">
          Vale notar que caracteres com acentos ou - são considerados bordas.
        </i>
        <p>
          Podemos lidar com o início e fim de uma linha. Usamos a meta <mark>^</mark> para indicar o início de uma linha e <mark>$</mark> indicando o fim de uma linha. Algo importante a se notar é que para as âncoras funcionarem a cada quebra de linha <mark>\n</mark> a flag <mark>m</mark> tem que estar habilitada. Segue uma estrofe usando a meta <mark>^</mark>:
        </p>
        <p className="code">
          pattern: /^[a-z]*\b/gmi <br />
          <mark>Quantas</mark> chances desperdicei
          <br />
          <mark>Quando</mark> o que eu mais queria
          <br />
          <mark>Era</mark> provar pra todo o mundo
          <br />
          <mark>Que</mark> eu não precisava provar nada pra ninguém
        </p>
        <p>
          Confira também o uso do meta <mark>$</mark> em uma estrofe:
        </p>
        <p className="code">
          pattern: /[a-z]+nto$/gmi <br />
          O tempo cobre o chão de verde <mark>manto</mark> <br />

          Que já coberto foi de neve fria,
          E em mim converte em choro o doce <mark>canto</mark>
        </p>
        <p>
          Conseguimos tratar início e final de um texto ao mesmo tempo. Confira um exemplo:
        </p>
        <p className="code">
          pattern: /^https:\/\/w{3}\.[a-z]+\.com$/gmi <br />
          string: https://google.com.br <br />
          string: <mark>https://www.facebook.com</mark> <br />
          string: https://www.voxel.com.br
        </p>
        <EstiloDeTitulo>Grupos “()”</EstiloDeTitulo>
        <p>
          Por fim, temos os grupos que facilita ainda mais nossas regras. Eles nos possibilita a criação de regras isoladas, possibilita a criação de referencias (retrovisores) para o reuso da mesma regra em outro local dentro de uma mesmo regex e ainda cria a possibilidade de validações dentro da regex. Seu uso é muito diverso, dando muito poder ao programador na hora de escrever suas regras. Veja um exemplo:
        </p>
        <p className="code">
          pattern: /(\d{2})\/?(\d{2})?\/(\d{4})/ <br />
          string:  Hoje é dia <mark>20/01/2020</mark>
        </p>
        <p>
          Uma função muito interessante dos grupos é que quando criamos algum grupo, este grupo é criando uma <mark>referência</mark>, que podemos acessa-lo em funções como o método replace (que vamos ver a frente) ou usar como retrovisores (mirror words) para fazer reuso de algum grupo que deu match anteriormente. Vejamos um exemplo baseado no exemplo anterior:
        </p>
        <p className="code">
          pattern: /\d{2}(\/?)\d{2}?\1\d{4}/g <br />
          string:  <mark> 20/01/2020 25091991 </mark> 25-09/2000
        </p>
        <p>
          No exemplo acima, veja que criamos o grupo <mark>(\/?)</mark> e para não repetí-lo em outro momento que necessitamos da mesma regra, usamos o retrovisor <mark>\1</mark> sendo <mark>1</mark> é ligado a <mark>ordem</mark> em que esse grupo foi criado. Podemos criar diversas referências para o reuso de regras.
        </p>
        <i className="sublinhado">
          Uma dica é se por exemplo usamos um grupo <mark>(\w)</mark> o seu retrovisor será o caractere que deu match com \w. Ex: <mark>\w</mark> = R seu \1 sera R.
        </i>
        <p>
          Podemos definir grupos que podem ser ignorados (non-capturing groups) na hora do match usando a sintaxe <mark>
            (?:)</mark>. Vejamos um exemplo:
        </p>
        <p className="code">
          pattern: /([a-z]*)\s(?:ronaldo)/gi <br />
          string:  <mark>Cristiano Ronaldo</mark>
        </p>
        <p>
          No exemplo acima, só foi <mark>nomeado</mark> um grupo, no caso <mark>([a-z]*)</mark> pois o grupo <mark>(?:ronaldo)</mark> foi definido usando <mark>(?:)</mark> e com isso não conseguimos manipulá-lo.
        </p>
        <p>
          Com os grupos podemos criar grupos aninhados (grupos dentro de grupos). Vejamos um exemplo:
        </p>
        <p className="code">
          pattern: /((d[io])|(co))([a-z]{2})(do)/gi <br />
          string:  <mark>ditado colado dosado</mark>
        </p>
        <p>
          Os grupos possuem <mark>grupos especiais</mark>. Como o positive <mark>lookahead</mark> <mark>(?=)</mark> e o seu oposto, <mark>negative lookahead (?!)</mark>. Com o positive lookahead podemos verificar se existe um grupo a frente de uma expressão ou grupo. Vejamos um exemplo:
        </p>
        <p className="code">
          pattern: /([a-z]+)(?=,)/gi <br />
          string:  <mark>Penso</mark>, logo existo
        </p>
        <p>
          Falamos acima que a regex só dá match em palavras que à sua frente possuam virgula. Já o negative lookahead é exatamente o contrário do positive lookahed, ele pegará todos que não fazem parte do grupo especial. Vejamos um exemplo:
        </p>
        <p className="code">
          pattern: /([a-z]+)(?!,)\b/gi <br />
          string:  Penso, <mark>logo existo</mark>
        </p>
        <p>
          Dentro dos grupos especiais ainda temos os <mark> positive lookbehind e negative lookbehind</mark>, porém como eles não possuem um bom suporte nos <mark>browsers</mark> decidi deixá-lo de fora deste post, porém pretendo abordá-los em post futuros.
        </p>
        <EstiloDeTitulo>Métodos de regex no js</EstiloDeTitulo>
        {/* <EstiloDeTitulo>Continua.......</EstiloDeTitulo> */}
        <p>
          O objeto regex possui dois métodos: <code>exec</code> e <code>test</code>. Já com string possui 4 métodos: <code>match</code>, <code>replace</code>, <code>search</code> e <code>split</code>. Porém neste post vou me ater somente a 3 métodos: test, match e replace.
        </p>
        <EstiloDeTitulo>Test</EstiloDeTitulo>
        <p>
          Usado para verificar se uma regex da match com uma string. Ela retorna sempre valor <mark>boolean</mark>. Este método é ideal para fazer <mark>validações</mark> como por exemplo validar se um email, telefone ou data estão corretos. Vejamos um exemplo validando números de telefone:
        </p>
        <p className="code">
          const regex = /(\((\d{2})\)\s?)?(\d${'{4, 5}'})[-]?(\d{4})/gm <br />
          <br />
          console.log(regex.test("(77) 95684-9783")) //true  <br />
          console.log(regex.test("(68)90499-9922")) //false  <br />
          console.log(regex.test("95088-2649")) //true
        </p>
        <EstiloDeTitulo>Match</EstiloDeTitulo>
        <p>
          Ele retorna um array, com as string que deram match com a regex. Se não houver valor, ele retorna <mark>null</mark>. Vejamos um exemplo procurando cep validos em um texto:
        </p>
        <p className="code">
          const text = ` <br />
          - 58204-824 <br />
          - 69337-978 <br />
          - 69.938-863 <br />
          - 7287498 <br />
          ` <br />
          const regex = /(\d${'{2}'}[.]?\d${'{3}'})[-]?(\d${'{3}'})/gm <br />
          console.log(text.match(regex)) <br />
        // [ '58204-824', '69337-978', '69.938-863']
        </p>
        <p>
          Vejamos acima que o último número não foi pego no match, pois ele não é um cep válido.
        </p>
        <EstiloDeTitulo>Replace</EstiloDeTitulo>
        <p className="code">
          Usado para <mark>substituir</mark> strings que deram match por uma nova string. Segue um exemplo:
        </p>
        <p className="code">
          const text = "É só o amor, é só o amor Que conhece o que é verdade" <br /><br />
          const regex = /o\samor/gi <br />
          console.log(text.replace(regex, "a dor")) <br />
        //É só a dor, é só a dor Que conhece o que é verdade <br />
        </p>
        <p>
          Podemos ainda manipular grupos. Vejamos um exemplo:
        </p>
        <p className="code">
          const text = "2019-26-09" <br />
          const regex = /(\d${'{4}'})-(\d${'{2}'})-(\d${'{2}'})/g <br />
          console.log(text.replace(regex, "$2/$3/$1")) <br />
        // 26/09/2019
        </p>
        <p>
          Um recurso legal do replace é que podemos passar uma função em vez da string de substituição. Isso ainda nos dá mais possibilidades de alteração em algum texto que queremos substituir algo. Vejamos um exemplo:
        </p>
        <p className="code">
          const texto = ` <br />
          Lista de jogos: <br />
          - Red dead redeption 2: R$ 180,00; <br />
          - The last of us 2: R$ 199,95; <br />
          - Resident Evil 2 remake: R$ 140,50; <br />
          ` <br />
          const regex = /(R\$)\s(\d*,\d*)/gim <br />
          const funcao = (match, p1, p2) ${' => {'} <br />
          const real = parseFloat(p2.replace(/,/g, ".")) <br />
          const cotacao = 4.21 <br />
          const dolar = (real / cotacao).toFixed(2) <br />
          const result = dolar.toString().replace(/\./g, ",") <br />
          return `US$ ${'{result}`'}  <br />
          ${'}'} <br />
          console.log(texto.replace(regex, funcao)) <br />
        /* <br />
          - Red dead redeption 2: US$ 42,76; <br />
          - The last of us 2: US$ 47,49; <br />
          - Resident Evil 2 remake: US$ 33,37; <br />
          */
        </p>
        <EstiloDeTitulo>Conclusão</EstiloDeTitulo>
        <p>
          Chegamos ao fim, o estudo de regex é muito interessante, sendo que possível fazer muitas coisas em diferentes linguagens. Fiz uma extensa lista de diversos problemas resolvidos com regex, confira abaixo:
        </p>
        <EstiloDeTitulo>Referências:</EstiloDeTitulo>
        <ul className="container-flags">
          <li>
            <span>•</span>
            <a target='_blank' href="https://flaviocopes.com/javascript-regular-expressions/" className="sublinhado">A guide to JavaScript Regular Expressions</a>
          </li>
          <li>
            <span>•</span>
            <a target='_blank' href="https://flaviocopes.com/javascript-regular-expressions/" className="sublinhado">20 Small Steps to Become a Regex Master</a>
          </li>
          <li>
            <span>•</span>
            <a target='_blank' href="https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285" className="sublinhado">Regex tutorial — A quick cheatsheet by examples</a>
          </li>
        </ul>
      </div>
    </LayoutRegex>
  )
}