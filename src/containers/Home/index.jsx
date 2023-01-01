import logo from "../../assets/vIcon.svg"


import { useNavigate } from "react-router-dom"
import { Container, BoxHeader, Main, Section } from "./styles"

function Home() {

  const navigate = useNavigate()
  function goArsenal(){
    navigate("/arsenal")
  }
  function goMapas(){
    navigate("/mapas")
  }
  function goAgentes(){
    navigate("/agentes")
  }
  return (
    <Container>
      <BoxHeader>
        <img src={logo} alt="logo" />
        <h1>Guia</h1>
      </BoxHeader>
      <Main>
        <h3>Um jogo de tiro tático 5x5 com personagens originais.</h3>
        <h2>VALORANT</h2>
      </Main>
      <Section>
        <button onClick={goAgentes}>Agentes</button>
        <button onClick={goArsenal}>Arsenal</button>
        <button onClick={goMapas}>Mapas</button>
      </Section>
    </Container>
  )
}

export default Home
