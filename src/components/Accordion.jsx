const Accordion = (props) =>{
    const style = {
      background: props.isOpen ? "var(--gray-2)" : "transparent",
      borderRadius: props.isOpen && "14px",
    };

    return (
      <div className="accordion" onClick={props.handleClick} style={style}>
        <div className="controls">
          <h3>{props.question}</h3>
          {props.isOpen ? <span class="material-symbols-outlined">remove</span> : <span class="material-symbols-outlined">add</span>}
        </div>

        {props.isOpen && <p>{props.answer}</p>}
      </div>
    );
}

export default Accordion