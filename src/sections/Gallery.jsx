import GalleryItem from "../components/GalleryItem";

import Gal1 from "../assets/img/gal-1.jpeg";
import Gal2 from "../assets/img/gal-2.jpeg";
import Gal3 from "../assets/img/gal-3.jpeg";
import Gal4 from "../assets/img/gal-4.jpeg";
import Gal5 from "../assets/img/gal-5.jpeg";
import Gal6 from "../assets/img/gal-6.jpeg";
import Gal7 from "../assets/img/gal-7.jpeg";
import Gal8 from "../assets/img/gal-8.jpeg";
import Gal9 from "../assets/img/gal-9.jpeg";
import Gal10 from "../assets/img/gal-10.jpeg";
import Gal11 from "../assets/img/gal-11.jpeg";
import Gal12 from "../assets/img/gal-12.jpeg";
import Gal13 from "../assets/img/gal-13.jpeg";
import Gal14 from "../assets/img/gal-14.jpeg";

function Gallery () {
  return (
    <section className="gallery">
      <GalleryItem image={Gal1} imageAlt={"Gallery image 1"} index={1} />
      <GalleryItem image={Gal2} imageAlt={"Gallery image 2"} index={2} />
      <GalleryItem image={Gal3} imageAlt={"Gallery image 3"} index={3} />
      <GalleryItem image={Gal4} imageAlt={"Gallery image 4"} index={4} />
      <GalleryItem image={Gal5} imageAlt={"Gallery image 5"} index={5} />
      <GalleryItem image={Gal6} imageAlt={"Gallery image 6"} index={6} />
      <GalleryItem image={Gal7} imageAlt={"Gallery image 7"} index={7} />
      <GalleryItem image={Gal8} imageAlt={"Gallery image 8"} index={8} />
      <GalleryItem image={Gal9} imageAlt={"Gallery image 9"} index={9} />
      <GalleryItem image={Gal10} imageAlt={"Gallery image 10"} index={10} />
      <GalleryItem image={Gal11} imageAlt={"Gallery image 11"} index={11} />
      <GalleryItem image={Gal12} imageAlt={"Gallery image 12"} index={12} />
      <GalleryItem image={Gal13} imageAlt={"Gallery image 13"} index={13} />
      <GalleryItem image={Gal14} imageAlt={"Gallery image 14"} index={14} />
    </section>
  )
}

export default Gallery