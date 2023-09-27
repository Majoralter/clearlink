const Star = () =>{
    const starColor = {
      color: "gold",
    };

    const stars = [...Array(5)].map((_, index) => {
      return (
        <span
          className="material-symbols-outlined star"
          key={index}
          style={starColor}
        >
          star
        </span>
      );
    });

    return(
        <>
        {stars}
        </>
    )
}

export default Star