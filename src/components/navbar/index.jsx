import { Nav } from "./style"

export function Navbar() {
  return (
    <div>
      <Nav>
        <div className="containerNavOpcao">
          <a href="/" className="active">Blog</a>
          <a href="">Portifólio</a>
          <a href="/regex">Docs</a>
          <a href="https://github.com/joaozinhodev" target="_blank"  className="containerGithub">
            <span>Github</span>
            <img src="assets/svg/github.svg" alt="" height="30px" />
          </a>
        </div>
      </Nav>
    </div>
  )
}