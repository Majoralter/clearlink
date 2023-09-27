import Accordion from "./Accordion"
import faq from "../faq";
import { useState } from "react";

const FAQ = () =>{
    const [items, setItems] = useState(faq)

    const toggleOpen = (id) =>{
        setItems(prevItems =>{
            return prevItems.map(item =>{
                return (item.id !== id && item.isOpen === true) || (item.id === id && item.isOpen === true) ? {...item, isOpen: false} : item.id === id && item.isOpen === false ? {...item, isOpen: true} : item 
            })
        })
    }

    const accordion = items.map(item =>{
        return <Accordion key={item.id} question={item.q} answer={item.a} isOpen={item.isOpen} handleClick={() => toggleOpen(item.id)} />
    })

    return (
      <section className="section--4">
        <div className="section--4_left">
          <h4>Support</h4>
          <h2>FAQs</h2>
          <p>
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please <a href="">
                chat to our friendly
                team.
            </a>
          </p>
        </div>

        <div className="section--4_right">
            {accordion}
        </div>
      </section>
    );
}

export default FAQ