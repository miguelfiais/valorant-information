import { Item } from "./styles"

const ItemCarousel = ({mapaImg, mapaName, descrition}) => {
  return (
    <Item>
        <h3>{mapaName}</h3>
        <img className='d-block w-100' src={mapaImg} alt="" />
        <div className="carousel-caption">
            <p>{descrition}</p>
            <button>VER GALERIA</button>
        </div>
    </Item>
  )
}

export default ItemCarousel
