import Logo from "/images/Logo.svg"
import Appstore from "/images/Appstore.png"
import Playstore from "/images/Playstore.png"
import Linkedin from "/images/Linkedin.png"
import Twitter from "/images/Twitter.png"
import Instagram from "/images/Instagram.png"
import Github from "/images/Github.png"
import Facebook from "/images/Facebook.png"
import Youtube from "/images/Youtube.png"


const Footer = () =>{
    return (
      <footer>
        <div className="footer_top">
          <div>
            <a href="#" className="logo">
              <img src={Logo} alt="" />
              ClearLink<span>.</span>
            </a>
            <p>
              ClearLink is your gateway to effortless, high- <br />
              quality video conferencing. Join us in shaping <br /> the future
              of communication!
            </p>
          </div>

          <div>
            <h5>Product</h5>
            <a href="#">Overview</a>
            <a href="#">Features</a>
            <a href="#">Solutions</a>
            <a href="#">Tutorials</a>
            <a href="#">Pricing</a>
          </div>

          <div>
            <h5>Company</h5>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h5>Resources</h5>
            <a href="#">Blog</a>
            <a href="#">Events</a>
            <a href="#">Help centre</a>
            <a href="#">Tutorials</a>
            <a href="#">Support</a>
          </div>

          <div>
            <h5>Legal</h5>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">Licenses</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h5>Get the app</h5>
            <a href="#"><img src={Appstore} alt="" /></a>
            <a href="#"><img src={Playstore} alt="" /></a>
          </div>
        </div>

        <div className="footer_bottom">
            <p>&copy; 2023 ClearLink. All rights reserved.</p>

            <div className="socials">
                <a href="#"><img src={Linkedin} alt="" /></a>
                <a href="#"><img src={Twitter} alt="" /></a>
                <a href="#"><img src={Facebook} alt="" /></a>
                <a href="#"><img src={Instagram} alt="" /></a>
                <a href="#"><img src={Github} alt="" /></a>
                <a href="#"><img src={Youtube} alt="" /></a>
            </div>
        </div>
      </footer>
    );
}

export default Footer