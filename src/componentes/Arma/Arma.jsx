import React from 'react'
import { BoxArma } from './styles'

const Arma = ({title, info, arma, descrition, type}) => {
  return (
    <BoxArma>
          <h1>{title}.</h1>
          <h3>TIPO // <span>{type}</span> </h3>
          <p className='descrition'>{descrition}.</p>
          <img src={arma} alt={title} />
          <p>{info}.</p>
    </BoxArma>
  )
}

export default Arma