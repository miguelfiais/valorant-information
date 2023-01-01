import React from 'react'
import Header from '../../componentes/Header/Header'
import { BoxAgentes, Buttons, Container } from './styles'
import agents from "../../assets/agents.png"
const Agentes = () => {

  return (
    <Container>
      <Header title="AGENTES" />
      <BoxAgentes>
        <Buttons>
            <button>BRIMSTONE</button>
            <button>OMEN</button>
            <button>HARBOR</button>
            <button>ASTRA</button>
            <button>VIPER</button>
            <button>JETT</button>
            <button>REYNA</button>
            <button>RAZE</button>
            <button>NEON</button>
            <button>PHOENIX</button>
            <button>YORU</button>
            <button>SOVA</button>
            <button>BREACH</button>
            <button>KAY/O</button>
            <button>SKYE</button>
            <button>FADE</button>       
            <button>CYPHER</button>
            <button>KILLJOY</button>
            <button>SAGE</button>
            <button>CHAMBER</button>
        </Buttons>
        <div>
          <img src={agents} alt="agentes" />
        </div>
        <div>
          <h2>// CONHEÇA A EQUIPE</h2>
          <p>Encontre mais formas de plantar a Spike e enfrentar seus inimigos com lutadores, estrategistas e caçadores de todos os tipos.</p>
        </div>
      </BoxAgentes>
    </Container>
  )
}

export default Agentes