import { useNavigate } from "react-router-dom"

import { BoxHeader } from "./styles"

const Header = ({title}) => {

  const navigate = useNavigate()
  function goHome(){
    navigate("/")
  }

  return (
    <BoxHeader>
        <h1>{title}</h1>
        <button onClick={goHome}>Voltar</button>
    </BoxHeader>
  )
}

export default Header