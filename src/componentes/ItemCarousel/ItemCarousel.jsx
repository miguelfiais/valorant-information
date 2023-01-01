import { Item } from "./styles"
import { HiArrowNarrowLeft } from "react-icons/hi";

const ItemCarousel = ({mapaImg, mapaName, descrition}) => {
  return (
    <Item>
        <h3>{mapaName}</h3>
        <img className='d-block w-100' src={mapaImg} alt="" />
        <div className="carousel-caption">
            <p>{descrition}</p>
            <button>VER GALERIA <HiArrowNarrowLeft /></button>
        </div>
    </Item>
  )
}

export default ItemCarousel
