import Header from '../components/Header'
import logo from "./assets/img/home-bg.jpg"
import "./App.css"
import { home_cards } from '../constants/constants'
import HomeCard from '../components/HomeCard'
import About from '../components/About'
import Popular from '../components/Popular'
import Explore from '../components/Explore'
import Join from '../components/Join'
import Footer from '../components/Footer'
import { useEffect, useRef } from 'react'

import ScrollReveal from "scrollreveal"


function App() {
  useEffect(()=> {
    const sr = ScrollReveal({
      origin:"top",
      distance:"60px",
      duration:2000,
      delay: 500,
    })
    sr.reveal(".home__data, .explore__data, .explore__user, .footer__container")
    sr.reveal(".home__card", {delay:200, interval:100})
    sr.reveal(".about__data, .join__image",{origin:"right"})
    sr.reveal(".about__image, .join__data", {origin:"left"})
    sr.reveal(".popular__card", {interval:200})
  },[])
  
  const scrollUp = useRef(null)

  const handleScrollUp = () => {
    window.scrollY >= 350
      ? scrollUp.current.classList.add("show-scroll")
      : scrollUp.current.classList.remove("show-scroll");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollUp);
    return () => {
      window.removeEventListener("scroll", handleScrollUp);
    };
  }, []);


  return (
    <>
      <Header />

      <main className='main'>
        <section className='home section' id='Home' >
          <img src={logo} alt="home img" className="home__bg" />
          <div className='home__shadow'></div>

          <div className='home__container container grid'>
            <div className='home__data'>
              <h3 className='home__subtitle'>
                Bienvenido a Travel
              </h3>

              <h1 className="home__title">
                Explora <br />
                El Mundo
              </h1>

              <p className='home__description'>
                Vive los viajes explorando el mundo, descubre paraísos, islas, montañas y mucho más, consigue ya tu viaje.
              </p>

              <a className='button' href='#'>
                Comienza tu Viaje <i className='ri-arrow-right-line'></i>
              </a>
            </div>

            <div className='home__cards grid'>
              {home_cards.map((card, i)=> (
                <HomeCard key={card.title} img={card.img} title={card.title} delay={200} animation="fade-up" />
              ))}
            </div>
          </div>
        </section>
        
        <About />

        <Popular />

        <Explore />
      
        <Join />
      </main>

      <Footer />

      <a ref={scrollUp} href="#" className="scrollup" id='scroll-up'>
        <i className='ri-arrow-up-line'></i>
      </a>
    </>
  )
}

export default App
