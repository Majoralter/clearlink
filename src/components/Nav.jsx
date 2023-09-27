import Logo from "/images/Logo.svg"

const Nav = () =>{
    const navItems = ['Products', 'Solutions', 'Resources']

    const dropDownItems = navItems.map((item, index) =>{
        return (
          <li key={index}>
            <a href="#">
              {item}
              <span className="material-symbols-outlined">expand_more</span>
            </a>
          </li>
        );
    })

    return(
        <nav>
            <a href="#" className="logo"><img src={Logo} alt="" />ClearLink<span>.</span></a>

            <ul>
                {dropDownItems}
                <li><a href="#">Pricing</a></li>
            </ul>

            <ul>
                <li><a href="#">Talk to sales</a></li>
                <li><a href="#">Sign up for free</a></li>
            </ul>
        </nav>
    )
}

export default Nav