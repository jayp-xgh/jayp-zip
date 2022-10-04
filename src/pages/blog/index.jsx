import { Navbar } from '../../components/navbar/navbar'
import { BlogConteudo } from '../../components/blogComponents/blogConteudo/blogConteudo'
import { Historia } from '../../components/blogComponents/historia/hitoria'
import { Formacoes } from '../../components/blogComponents/formacoes/formacoes'
import { Tecnologias } from '../../components/blogComponents/tecnologias/tecnologias'
import { Portifolio } from '../../components/blogComponents/portifolio/portifolio'
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
