import Story1 from "../assets/img/story-1.jpeg";
import Story2 from "../assets/img/story-2.jpeg";

function StoryPictures () {
  return (
    <div className="story__pictures">
      <img 
        src={Story1}
        alt="Couple with new house"
        className="story__img--1"
      />
      <img
        src={Story2}
        alt="New house"
        className="story__img--2"
      />
    </div>
  )
}

export default StoryPictures