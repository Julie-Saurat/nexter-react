function Feature (props) {
  const {icon, title, text} = props

  return(
    <div className="feature">
      <div className="feature__icon">
        {icon}
      </div>
      <h4 className="heading-4--dark">
        {title}
      </h4>
      <p className="feature__text">
        {text}
      </p>
    </div>
  )
}

export default Feature;