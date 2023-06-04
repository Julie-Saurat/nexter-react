import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'

function Card (props) {
  const {image, imageAlt, title, location, rooms, space, price} = props

  return (
    <div className="home">
      <img src={image} alt={imageAlt} className="home__img"/>
      <div className="home__like">
        <FontAwesomeIcon icon={faHeart} />
      </div>

      <h5 className="home__name">{title}</h5>
      <div className="home__element home__location">
        <FontAwesomeIcon icon={faLocationPin} />
        <p>{location}</p>
      </div>
      <div className="home__element home__rooms">
        <FontAwesomeIcon icon={faBed} />
        <p>{rooms}</p>
      </div>
      <div className="home__element home__area">
        <FontAwesomeIcon icon={faHouse} />
          <p>{space} m<sup>2</sup></p>
      </div>
      <div className="home__element home__price">
        <FontAwesomeIcon icon={faKey} />
        <p>${price}</p>
      </div>
      <button className="btn home__btn">Contact realtor</button>
  </div>
  )
}

export default Card;