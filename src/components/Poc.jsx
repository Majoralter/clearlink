const Poc = () =>{
    const images = [
        {
            id: 1,
            src: "/images/Shopify.com svg.png"
        },
        {
            id: 2,
            src: "/images/Coinbase svg.png"
        },
        {
            id: 3,
            src: "/images/Dropbox svg.png"
        },
        {
            id: 4,
            src: "/images/Intercom svg.png"
        },
        {
            id: 5,
            src: "/images/Marvel svg.png"
        },
        {
            id: 6,
            src: "/images/Automattic svg.png"
        },
    ]

    const img = images.map(item =>{
        return <img key={item.id} src={item.src} alt="" />
    })

    return (
      <section className="section--1">
        <h4>
          Join 1,500+ companies already video conferencing the ClearLink way
        </h4>

        <div className="images">{img}</div>
      </section>
    );
}

export default Poc
// Btw Poc means 'Proof Of Concept' I didn't know what else to name the component :/"