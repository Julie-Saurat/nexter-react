import Card from "../components/Card";

import House1 from "../assets/img/house-1.jpeg";
import House2 from "../assets/img/house-2.jpeg";
import House3 from "../assets/img/house-3.jpeg";
import House4 from "../assets/img/house-4.jpeg";
import House5 from "../assets/img/house-5.jpeg";
import House6 from "../assets/img/house-6.jpeg";


function Homes () {
  return (
    <section className="homes">
      <Card
        image={House1}
        imageAlt={"House 1"}
        title={"Beautiful Familiy House"}
        location={"USA"}
        rooms={5}
        space={325}
        price={"1,200,000"}
      />
      <Card
      image={House2}
      imageAlt={"House 2"}
      title={"Modern Glass Villa"}
      location={"Canada"}
      rooms={6}
      space={450}
      price={"2,750,000"}
    />
      <Card
      image={House3}
      imageAlt={"House 3"}
      title={"Cozy Country House"}
      location={"UK"}
      rooms={4}
      space={250}
      price={"850,000"}
    />
      <Card
      image={House4}
      imageAlt={"House 4"}
      title={"Large Rustical Villa"}
      location={"Portugal"}
      rooms={6}
      space={480}
      price={"1,950,000"}
    />
      <Card
      image={House5}
      imageAlt={"House 5"}
      title={"Majestic Palace House"}
      location={"Germany"}
      rooms={18}
      space={4230}
      price={"9,500,000"}
    />
      <Card
      image={House6}
      imageAlt={"House 6"}
      title={"Modern Familiy Apartment"}
      location={"Italy"}
      rooms={3}
      space={180}
      price={"600,000"}
    />
    </section>
  )
}

export default Homes