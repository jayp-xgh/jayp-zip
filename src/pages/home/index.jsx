import { Navbar } from '../../components/navbar'
import { BlogConteudo } from '../../components/blog/'
import { Historia } from '../../components/blog/historia'
import { Formacoes } from '../../components/blog/formacoes'
import { Tecnologias } from '../../components/blog/tecnologias'
import { Portifolio } from '../../components/blog/portifolio'
import { ContainerBlog } from "./style";

export function Blog() {
  return (
    <ContainerBlog>
      <Navbar />
      <BlogConteudo />
      <Historia />
      <Formacoes />
      <Tecnologias />
      <Portifolio />
    </ContainerBlog>
  )
}
