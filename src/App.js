import React, { useEffect } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import Swiper from 'swiper'; // Importer Autoplay
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CountUp from './blocks/TextAnimations/CountUp/CountUp';
import BlurText from './blocks/TextAnimations/BlurText/BlurText';
import BlobCursor from './blocks/Animations/BlobCursor/BlobCursor';
import Magnet from './blocks/Animations/Magnet/Magnet';
import ScrollReveal from './blocks/TextAnimations/ScrollReveal/ScrollReveal';
import AnimatedContent from './blocks/Animations/AnimatedContent/AnimatedContent';

// Initialisation de Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VpdG91bmVveiIsImEiOiJjbHI1Y3ZmZHMxbWI4MmpwODRlMWZhdGxzIn0.Gl-6FFo3NLZ-AhSnOKp2pQ';

function App() {
  useEffect(() => {
    // Initialisation de la carte Mapbox
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [3.0767, 44.0983], // Coordonnées de Millau
      zoom: 12
    });

    // Initialisation de Swiper avec le module Autoplay
    const swiper = new Swiper('.home-slider', {
      loop: true,
      modules: [Autoplay], // Ajouter le module Autoplay
      autoplay: {
        delay: 4000, // Défilement toutes les 2 secondes
        disableOnInteraction: false, // Continuer l'autoplay même après une interaction
      },
    });

    // Initialisation de LightGallery
    lightGallery(document.querySelector('.projects .box-container'), {
      selector: '.box'
    });

    // Nettoyage des instances lors du démontage du composant
    return () => {
      map.remove();
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">S.A.R.L
          <span><BlurText
            text=" Cartayrade Vellas"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
          /></span></a>
        <nav className="navbar">
          <a href="#home"><BlurText
            text="Accueil"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
          /></a>
          <a href="#about"><BlurText
            text="À propos"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
          /></a>
          <a href="#services"><BlurText
            text="Services"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
          /></a>
          <a href="#projects"><BlurText
            text="Projets"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
          /></a>
          <a href="#contact"><BlurText
            text="Contact"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
          /></a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide slide-1">
              <div className="content">
                <h3><BlurText
                  text="Nous réalisons vos projets de plâtrerie et rénovation"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="blur"
                /></h3>
                <p><BlurText
                  text="Spécialisés dans les finitions intérieures, nous vous assurons un travail soigné et personnalisé."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="blur"
                /></p>
                <Magnet padding={50} disabled={false} magnetStrength={10}>
                  <a href="#about" className="btn">En savoir plus</a>
                </Magnet>
              </div>
            </div>
            <div className="swiper-slide slide slide-2">
              <div className="content">
                <h3>Votre intérieur, notre passion</h3>
                <p>Créons ensemble des espaces qui répondent à vos attentes, pour un confort optimal.</p>
                <Magnet padding={50} disabled={false} magnetStrength={10}>
                  <a href="#about" className="btn">En savoir plus</a>
                </Magnet>
              </div>
            </div>
            <div className="swiper-slide slide slide-3">
              <div className="content">
                <h3>Des finitions de qualité pour un intérieur unique</h3>
                <p>Plâtrerie, cloisonnement et isolation nous réalisons vos envies.</p>
                <Magnet padding={50} disabled={false} magnetStrength={10}>
                  <a href="#about" className="btn">En savoir plus</a>
                </Magnet>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1}
        threshold={0.2}
      >
        <section className="about" id="about">
          <h1 className="heading"> <ScrollReveal
            baseOpacity={0.5}
            enableBlur={true}
            baseRotation={10}
            blurStrength={10}
          >À propos de nous </ScrollReveal></h1>
          <div className="row">
            <div className="video">
              <video src="images/about-vid.mp4" loop muted autoPlay></video>
            </div>
            <div className="content">
              <h3 style={{ textTransform: 'unset' }} className='headReveal'>
                <ScrollReveal
                  baseOpacity={0.5}
                  enableBlur={true}
                  baseRotation={10}
                  blurStrength={10}
                >
                  Des experts en plâtrerie pour vos projets de rénovation
                </ScrollReveal>
              </h3>
              <p>
                <ScrollReveal
                  baseOpacity={0.5}
                  enableBlur={true}
                  baseRotation={10}
                  blurStrength={10}
                >Forts de nombreuses années d'expérience, nous mettons notre savoir-faire artisanal au service de vos projets de construction et de rénovation.
                </ScrollReveal></p>
              <Magnet padding={50} disabled={false} magnetStrength={10}><a href="#services" className="btn">Lire plus</a></Magnet>
            </div>
          </div>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <div className="box-container">
              <div className="box">
                <h3>
                  <CountUp
                    from={0}
                    to={18}
                    separator=","
                    direction="up"
                    duration={0.6}
                    className="count-up-text"
                  /> +
                </h3>
                <p>Années d'expérience</p>
              </div>
              <div className="box">
                <h3><CountUp
                  from={0}
                  to={550}
                  separator=","
                  direction="up"
                  duration={0.6}
                  className="count-up-text"
                /> +</h3>
                <p>Projets neufs ou rénovations</p>
              </div>
              <div className="box">
                <h3><CountUp
                  from={0}
                  to={790}
                  separator=","
                  direction="up"
                  duration={0.6}
                  className="count-up-text"
                /> +</h3>
                <p>Clients satisfaits</p>
              </div>
            </div>
          </AnimatedContent>
        </section>
      </AnimatedContent>

      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={true}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1}
        threshold={0.2}>
        <section className="services" id="services">
          <h1 className="heading">Nos Services</h1>
          <div className="box-container">
            <AnimatedContent
              distance={300}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1}
              threshold={0.2}>
              <div className="box">
                <img src="images/service-1.png" alt="Construction de bâtiments" />
                <h3>Isolation</h3>
                <p>Nous intervenons pour des projets d'isolation intérieure et/ou extérieure, en intégrant des finitions de haute qualité.</p>
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={300}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1}
              threshold={0.2}>
            <div className="box">
              <img src="images/service-2.png" alt="Rénovation d'intérieur" />
              <h3>Rénovation</h3>
              <p>Transformez votre intérieur avec notre expertise en rénovation.</p>
            </div>
            </AnimatedContent>
            <AnimatedContent
              distance={300}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1}
              threshold={0.2}>
            <div className="box">
              <img src="images/service-3.png" alt="Plâtrerie et cloisonnement" />
              <h3>Plâtrerie et Cloisonnement</h3>
              <p>Nous réalisons les travaux de plâtrerie et cloisons pour créer des espaces personnalisés.</p>
            </div>
            </AnimatedContent>
          </div>
        </section>
      </AnimatedContent>

      <section className="projects" id="projects">
        <h1 className="heading">Nos projets</h1>
        <div className="box-container">
          <a href="images/project-1.jpg" className="box">
            <div className="image">
              <img src="images/project-1.jpg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>
          <a href="images/project-2.jpg" className="box">
            <div className="image">
              <img src="images/project-2.jpg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>
          <a href="images/project-3.jpg" className="box">
            <div className="image">
              <img src="images/project-3.jpg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading">Contactez-nous</h1>
        <div className="row">
          <div id="map-container" className="map">
            <div id="map" className="mapbox" data-mapbox></div>
          </div>
          <form action="">
            <h3>Ecrivez-nous !</h3>
            <input type="text" placeholder="Nom" className="box" style={{ paddingLeft: '15px' }} />
            <input type="email" placeholder="Email" className="box" style={{ paddingLeft: '15px' }} />
            <input type="number" placeholder="Téléphone" className="box" style={{ paddingLeft: '15px' }} />
            <textarea name="" placeholder="Message" className="box" id="" cols="30" rows="10" style={{ paddingLeft: '15px' }}></textarea>
            <input type="submit" value="Envoyer" className="btn" />
          </form>
        </div>
      </section>

      <section className="footer">
        <div className="credit">
          created by <a href="https://itgcdev.fr" target="_blank" rel="noopener noreferrer">
            <span>ITGC et Emma</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
