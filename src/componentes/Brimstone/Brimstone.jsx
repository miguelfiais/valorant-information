import React from 'react'
import data from "../../data/data"
import brimQ from "../../assets/BrimstoneQ.png"
import { BoxSkills, ButtonSkills, ContainerAgente, InfoAgente } from './styles'

const Brimstone = () => {
    console.log(data[0])
  return (
    <ContainerAgente>
        <img src={data[0].modelo} alt="" />
        <InfoAgente>
            <h3>// FUNÇÃO</h3>
            <h2>{data[0].function}</h2>
            <h3>// BIOGRAFIA</h3>
            <p>{data[0].biografia}</p>
        </InfoAgente>
        <BoxSkills>
            <h1>HABILIDADES ESPECIAIS</h1>
            <div>
                <ButtonSkills>
                    <button><img src={brimQ} alt="" /></button>
                    <button><img src={brimQ} alt="" /></button>
                    <button><img src={brimQ} alt="" /></button>
                    <button><img src={brimQ} alt="" /></button>
                </ButtonSkills>
                <video src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4"
                    controlsList="nodownload"
                    muted
                    autoPlay
                    loop
                    width="500px">
                </video>
            </div>
        </BoxSkills>
    </ContainerAgente>
  )
}

export default Brimstone