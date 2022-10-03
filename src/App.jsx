import { Navbar } from './components/home/navbar/navbar'
import { Blog } from './components/home/blog/Blog'
import { Historia } from './components/home/historia/hitoria'
import { Formacoes } from './components/home/formacoes/formacoes'
import { Tecnologias } from './components/home/tecnologias/tecnologias'
import { Portifolio } from './components/home/portifolio/portifolio'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Blog />
      <Historia />
      <Formacoes />
      <Tecnologias />
      <Portifolio />
    </div>
  )
}
export default App
