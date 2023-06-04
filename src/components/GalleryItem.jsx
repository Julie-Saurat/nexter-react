
function GalleryItem (props) {
  const {image, imageAlt, index} = props;
  let style = `gallery__item gallery__item--${index}`;

  return (
    <figure className={style}>
      <img src={image} alt={imageAlt} className="gallery__img"/>
    </figure>
  )
}

export default GalleryItem