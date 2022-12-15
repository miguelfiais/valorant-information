import React from 'react'
import { BoxArma } from './styles'

const Arma = ({title, info, type}) => {
  return (
    <BoxArma>
          <h1>{title}.</h1>
          <img src={type} alt={title} />
          <p>{info}.</p>
    </BoxArma>
  )
}

export default Arma