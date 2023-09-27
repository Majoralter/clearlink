import HeroImage from "/images/HeroImage.png"
import { Tilt } from "react-tilt"
import Avatars from "/images/Avatar group.png"
import Star from "./Star"

const Hero = () =>{
    const defaultOptions = {
      reverse: false,
      max: 35,
      perspective: 1000,
      scale: 1,
      speed: 1000,
      transition: true,
      axis: null,
      reset: true, 
      easing: "cubic-bezier(.03,.98,.52,.99)",
    };

    


    return (
      <section className="hero--section">
        <div className="hero--content">
          <h1>
            Uniting the world, <br />
            one video call at a time
          </h1>

          <p>
            Experience the future of communication with ClearLink <br /> where
            crystal-clear video conferencing meets <br /> unparalleled
            simplicity.
          </p>

          <div className="hero--content_cta">
            <a href="#">Start your free trial</a>
            <a href="#">
              <span class="material-symbols-outlined">smart_toy</span>
              Discover AI assistant
            </a>
          </div>

            <div className="ratings">
                <img src={Avatars} alt="" />

                <div className="ratings--value">
                    <Star />
                </div>
            </div>
        </div>

        <Tilt options={defaultOptions} style={{height: 488, width: "auto"}}>
          <div className="hero--image">
            <img src={HeroImage} alt="" />
          </div>
        </Tilt>
      </section>
    );
}

export default Hero