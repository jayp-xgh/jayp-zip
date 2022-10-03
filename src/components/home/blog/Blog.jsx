import { ConteudoBlog } from "./style";
export function Blog() {
  return (
      <ConteudoBlog>
        <div id="blog">
          <h1>Blog </h1>
          <img src="assets/svg/emojBlog.svg" alt="" height="60px" />
        </div>
        <p>
          Seja muitíssimo bem-vindo a meu blog!! aqui você poderá conhecer um pouquinho sobre quem sou eu, meus trabalhos e também adquirir conhecimento lendo minhas documentações.
        </p>
        <a href="" className="containerJoaizinhoDev">
          <img src="assets/img/minhaFoto.png" alt="" height="40px" />
          <span>
            @joaozinhoDev
          </span>
        </a>
      </ConteudoBlog>
  )
}