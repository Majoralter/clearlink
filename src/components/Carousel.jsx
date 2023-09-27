import { useState, useEffect, useRef } from "react";
import Star from "./Star";

const Carousel = (props) =>{
    const [index, setIndex] = useState(0)
    const [pause, setPause] = useState(false)

    useEffect(() =>{
        const carouselInterval = setInterval(() =>{
            if(!pause){
               setIndex((prevIndex) =>
                 prevIndex === props.data.length - 1 ? 0 : prevIndex + 1
               );
            }
        }, 5000)

        return () => clearInterval(carouselInterval)
    }, [pause])

   const handleNext = () =>{
        setIndex(prevIndex => prevIndex === props.data.length - 1 ? 0 : prevIndex + 1)
   }

   const handlePrev = () =>{
        setIndex(prevIndex => prevIndex === 0 ? props.data.length - 1 : prevIndex - 1)
   }

   const handlePause = () =>{
    setPause(prev => !prev)
   }

    return (
      <div className="testimonial--wrapper" onMouseEnter={handlePause} onMouseLeave={handlePause}>
        <div className="stars">
          <Star />
        </div>

        <h2>{props.data[index].testimony}</h2>

        <div className="details">
          <div className="user--details">
            <img src={props.data[index].src} alt="" />
            <div className="user--name">
              <h5>{props.data[index].name}</h5>
              <p>{props.data[index].tag}</p>
            </div>
          </div>

          <div className="navigation--tab">
            <button onClick={handlePrev}>
              <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <button onClick={handleNext}>
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Carousel