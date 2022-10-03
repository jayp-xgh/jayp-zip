import { Nav } from "./style";

export function Navbar() {
  return (
    <div>
      <Nav>
        <div className="containerNavOpcao">
          <a href="" className="active">Blog</a>
          <a href="">Portifólio</a>
          <a href="">Docs</a>
          <a href="" className="containerGithub">
            <span>Github</span>
            <img src="assets/svg/github.svg" alt="" height="30px" />
          </a>
        </div>
      </Nav>
    </div>
  )
}