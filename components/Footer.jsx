import "./Footer.css"
import { footer_links } from "../constants/constants"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <div>
            <a href="#" className="footer__logo">Travel</a>

            <p className="footer__description">
              Travel with us and explore <br />
              the world without limits.
            </p>
          </div>

          <div className="footer__data grid">
            {footer_links.map(cat=> (
              <div key={cat.title}>
                <h3 className="footer__title">{cat.title}</h3>
                
                <ul className="footer__links">
                  {cat.links.map(link=> (
                    <li key={link}>
                      <a href="#" className="footer__link">{link}</a>
                    </li>
                  ))}    
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__group">
          <div className="footer__social">
            <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
              <i className="ri-facebook-line"></i>
            </a>
            
            <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
              <i className="ri-instagram-line"></i>
            </a>

            <a href="https://www.twitter.com/" target="_blank" className="footer__social-link">
              <i className="ri-twitter-line"></i>
            </a>

            <a href="https://www.youtube.com/" target="_blank" className="footer__social-link">
              <i className="ri-youtube-line"></i>
            </a>
          </div>

          <span className="footer__copy">
            &#169; All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer