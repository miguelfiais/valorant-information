import React from 'react'
import Arma from '../../componentes/Arma/Arma'
import Header from '../../componentes/Header/Header'

import classic from "../../assets/classic.png"
import shorty from "../../assets/shorty.png"
import frenzy from "../../assets/frenzy.png"
import ghost from "../../assets/ghost.png"
import sheriff from "../../assets/sheriff.png"
import stinger from "../../assets/stinger.png"
import spectre from "../../assets/spectre.png"
import bucky from "../../assets/bucky.png"
import judge from "../../assets/judge.png"
import bulldog from "../../assets/shorty.png"
import guardian from "../../assets/guardian.png"
import phantom from "../../assets/phantom.png"
import vandal from "../../assets/vandal.png"
import marshal from "../../assets/marshal.png"
import operator from "../../assets/operator.png"
import ares from "../../assets/ares.png"
import odin from "../../assets/odin.png"
import faca from "../../assets/faca.png"

import { Container, Main } from './styles'

const Arsenal = () => {
  return (
    <Container>
      <Header title="ARSENAL" />
      <Main>
        <Arma title = "CLASSIC" type={classic} info="Leve e versátil, a arma padrão é um clássico inegável"/>
        <Arma title = "SHORTY" type={shorty} info="Surpreenda seus amigos bem de perto para obter o máximo de eficiência"/>
        <Arma title = "FRENZY" type={frenzy} info="A curta distância, dedo no gatilho! A loga distância... é melhor procurar"/>
        <Arma title = "GHOST" type={ghost} info="Elegante, silenciosa e eficiente ao disparar de qualquer distância"/>
        <Arma title = "SHERIFF" type={sheriff} info="Sheriff é um revólver moderno feito para quem busca tiros certeiros na cabeça do inimigo"/>
        <Arma title = "STINGER" type={stinger} info="Os inimigos sabem que o fim chegou quando sentem o disparo da Stinger"/>
        <Arma title = "SPECTRE" type={spectre} info="Bateu a dúvida? Vai de Spectre que dá tudo certo"/>
        <Arma title = "BUCKY" type={bucky} info="Atacante? Defensor? Tanto faz. O importante é ter uma escopeta dessas em mãos"/>
        <Arma title = "JUDGE" type={judge} info="Judge é uma escopeta automática de tiro rápido que causa muito dano constante"/>
        <Arma title = "BULLDOG" type={bulldog} info="Bulldog é o tipo de arma que traz satisfação ao conseguir um abate"/>
        <Arma title = "GUARDIAN" type={guardian} info="Esta arma dá show nas mãos de atiradores pacientes."/>
        <Arma title = "PHANTOM" type={phantom} info="Phantom é uma arma equilibrada, projetada para tiros estáveis que alcançam longas distâncias"/>
        <Arma title = "VANDAL" type={vandal} info="Este fuzil extremamente potente causa um enermo estrago com pequenas rajadas de balas"/>
        <Arma title = "MARSHAL" type={marshal} info="Escolha um ângulo bom, mire, e o alvo se arrependerá de ter dobrada aquela esquina"/>
        <Arma title = "OPERATOR" type={operator} info="Aconchegue-se em um lugar e será capaz de contralar áreas importantes"/>
        <Arma title = "ARES" type={ares} info="Não subestime o poder dessa arma"/>
        <Arma title = "ODIN" type={odin} info="Ao empunhar uma arma grandiosa como esta, uma coisa é certa: quem a possui ascenderá a glória enquanto o oponente cai em ruína"/>
        <Arma title = "FACA TÁTICA" type={faca} info="Para a solução mais íntima"/>
      </Main>
    </Container>
  )
}

export default Arsenal