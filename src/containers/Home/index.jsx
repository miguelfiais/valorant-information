import agentes from "../../data/informations" 


import logo from "../../assets/vIcon.svg"
import { Container, Header, Main, Section } from "./styles"
function Home() {

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
        <h1>Guia</h1>
      </Header>
      <Main>
        <h3>Um jogo de tiro tático 5x5 com personagens originais.</h3>
        <h2>VALORANT</h2>
      </Main>
      <Section>
        <button>Agentes</button>
        <button>Armas</button>
        <button>Mapas</button>
      </Section>
    </Container>
  )
}

export default Home
