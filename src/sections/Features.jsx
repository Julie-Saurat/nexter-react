import Feature from "../components/Feature"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

function Features () {
  return (
    <section className="features">
      <Feature 
        icon={<FontAwesomeIcon icon={faGlobe} />} 
        title={"World's best luxury homes"}
        text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."}/>
      <Feature
        icon={<FontAwesomeIcon icon={faTrophy} />}
        title={"Only the best properties"}
        text={"Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia."}/>  
      <Feature
        icon={<FontAwesomeIcon icon={faMap} />}
        title={"All homes in in top locations"}
        text={"Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."}/>  
      <Feature
        icon={<FontAwesomeIcon icon={faKey} />}
        title={"New home in one week"}
        text={"Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/>  
      <Feature
        icon={<FontAwesomeIcon icon={faBolt} />}
        title={"Top 1% realtors"}
        text={"Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus."}/>  
      <Feature 
        icon={<FontAwesomeIcon icon={faLock} />} 
        title={"Secure payments on nexter"}
        text={"Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."}/>  
    </section>
  )
}

export default Features