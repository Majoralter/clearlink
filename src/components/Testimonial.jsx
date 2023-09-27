import Carousel from "./Carousel"
import data from "../data"
import TestimonialImage from "/images/TestimonialImage.png"

const Testimonial = () =>{
    return (
      <section className="section--3">
        <Carousel data={data} />

        <img src={TestimonialImage} alt="" />
      </section>
    );
}

export default Testimonial