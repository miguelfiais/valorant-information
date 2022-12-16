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
        <Arma title = "CLASSIC" arma={classic} type="ARMAS LEVES"
        info="Leve e versátil, a arma padrão é um clássico inegável" 
        descrition="Seu modo primário faz disparos precisos quando o jogador está parado. Além disso, ela vem equipada com um modo alternativo de rajadas para combates de curta distância"/>
        <Arma title = "SHORTY" arma={shorty} type="ARMAS LEVES"
        info="Surpreenda seus amigos bem de perto para obter o máximo de eficiência" 
        descrition="Uma escopeta rápida de cano curto e altamente letal a curta distância, mas que dispara apenas dois tiros antes de precisar recarregar. Combina bem com armas de longa distância"/>
        <Arma title = "FRENZY" arma={frenzy} type="ARMAS LEVES"
        info="A curta distância, dedo no gatilho! A loga distância... é melhor procurar" 
        descrition="Frenzy é uma metralhadora de mão leve e excelente para usar em movimento. Sua alta cadência de tiro pode ser díficil de controlar, então tente disparar rajadas curtas a distâncias intermediárias"/>
        <Arma title = "GHOST" arma={ghost} type="ARMAS LEVES"
        info="Elegante, silenciosa e eficiente ao disparar de qualquer distância"
         descrition="Ghost é uma arma precisa que conta com um grande carregador, o que ajuda a compensar qualquer erro seu. Para acertar alvos distantes, é preciso manter a cadência de tiro controlada. E para acertar alvos de perto, pode sentar o dedo no gatilho"/>
        <Arma title = "SHERIFF" arma={sheriff} type="ARMAS LEVES"
        info="Sheriff é um revólver moderno feito para quem busca tiros certeiros na cabeça do inimigo" 
        descrition="Seus projéteis de alto impacto provocam bastante recuo, então é preciso ter pulso firme. 
        Quando você domina esta arma, seus inimigos logo percebem que nunca tiveram chance"/>
        <Arma title = "STINGER" arma={stinger} type="SUBMETRALHADORAS"
        info="Os inimigos sabem que o fim chegou quando sentem o disparo da Stinger" 
        descrition="Esta submetralhadora tem mais potência a médias e longas distâncias, à custa da cadência de tiro e mobilidade. Seu carregador de 20 projéteis é contrabalançado por sprays que provocam bastante recuo. Em compensação, esta arma dispara tiros letais a distâncias intermediárias com a ajuda da mira e de fogo controlado"/>
        <Arma title = "SPECTRE" arma={spectre} type="SUBMETRALHADORAS"
        info="Bateu a dúvida? Vai de Spectre que dá tudo certo" 
        descrition="Spectre é uma arma faz-tudo com ótimo equilíbrio entre dano, cadência de tiro e precisão – tudo isso a distâncias curtas e intermediárias.Ela assombra as esquinas de todo mapa e requer apenas uma mira estável para acabar com os inimigos a longa distância"/>
        <Arma title = "BUCKY" arma={bucky} type="ESCOPETAS"
        info="Atacante? Defensor? Tanto faz. O importante é ter uma escopeta dessas em mãos" 
        descrition="Pesada, porém estável, Bucky tem um modo primário que serve para segurar avanços em esquinas acirradas ou ajudar na investida em áreas pequenas"/>
        <Arma title = "JUDGE" arma={judge} type="ESCOPETAS"
        info="Judge é uma escopeta automática de tiro rápido que causa muito dano constante" 
        descrition="Ela é estável com seus tiros normais, mas se torna volátil em disparos rápidos. Seu modo primário acaba com os alvos a curta distância, mas você precisará de uma mira estável para acertar qualquer coisa que esteja além do alcance do seu braço"/>
        <Arma title = "BULLDOG" arma={bulldog} type="FUZIS"
        info="Bulldog é o tipo de arma que traz satisfação ao conseguir um abate" 
        descrition="Este fuzil pode se tornar uma verdadeira máquina mortífera. Seu modo secundário permite que o atirador use a mira e descarregue rajadas curtas e precisas em qualquer um que se aproximar a distâncias intermediárias a longas"/>
        <Arma title = "GUARDIAN" arma={guardian} type="FUZIS"
        info="Esta arma dá show nas mãos de atiradores pacientes." 
        descrition="Por ser um fuzil estilo DMR, Guardian é mais pesado e oferece menos mobilidade do que outros fuzis, mas seus disparos são precisos e poderosos. Saia caçando inimigos a distâncias longas e intermediárias"/>
        <Arma title = "PHANTOM" arma={phantom} type="FUZIS"
        info="Phantom é uma arma equilibrada, projetada para tiros estáveis que alcançam longas distâncias" 
        descrition="Aproveite a automação desta arma para atingir qualquer um que tente se aproximar. Lance rajadas curtas e controladas para dispersar inimigos em qualquer lugar. Phantom tem um desempenho melhor quando o atirador está parado"/>
        <Arma title = "VANDAL" arma={vandal} type="FUZIS"
        info="Este fuzil extremamente potente causa um enermo estrago com pequenas rajadas de balas" 
        descrition="Em compensação, se disparar por muito tempo, sua estabilidade é prejudicada. Vandal concede bastante dano a longa distância e recompensa aqueles que focam em um único tiro certeiro na cabeça do alvo"/>
        <Arma title = "MARSHAL" arma={marshal} type="FUZIS DE PRECISÃO"
        info="Escolha um ângulo bom, mire, e o alvo se arrependerá de ter dobrada aquela esquina" 
        descrition="Marshal é um fuzil de precisão ágil e de zoom único que consegue manter longe aqueles inimigos insistentes. Devido à cadência mais lenta, você precisará acertar seus disparos ou ficará vulnerável a ataques"/>
        <Arma title = "OPERATOR" arma={operator} type="FUZIS DE PRECISÃO"
        info="Aconchegue-se em um lugar e será capaz de contralar áreas importantes" 
        descrition="Operator é um fuzil de precisão intenso com zoom duplo altamente eficiente. Esta arma tem um desempenho péssimo em movimento, mas dispara projéteis absurdamente poderosos que podem devastar uma equipe inteira com um só tiro"/>
        <Arma title = "ARES" arma={ares} type="METRALHADORAS"
        info="Não subestime o poder dessa arma" 
        descrition="Ares conta com um carregador enorme e se destaca em fogo de supressão ou causando muito dano a grupos concentrados de inimigos"/>
        <Arma title = "ODIN" arma={odin} type="METRALHADORAS"
        info="Ao empunhar uma arma grandiosa como esta, uma coisa é certa: quem a possui ascenderá a glória enquanto o oponente cai em ruína" 
        descrition="Odin conta com disparos que causam bastante dano e anulam ataques com uma estabilidade surpreendente. Use sprays contra inimigos a curta distância e troque para o modo secundário para se tornar uma torreta ambulante"/>
        <Arma title = "FACA TÁTICA" arma={faca} type="CONFRONTO"
        info="Para a solução mais íntima" descrition="Quando você ficar sem balas ou estiver em dúvida sobre o que fazer, dê uma facada no adversário. Com esta faca, você poderá correr mais rápido, destruir objetos mais depressa e acertar seus inimigos de uma vez só bem nas costas com o modo secundário"/>
      </Main>
    </Container>
  )
}

export default Arsenal