import React, { useEffect } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import Swiper from 'swiper';
import 'swiper/css';

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

    // Initialisation de Swiper sans le module Navigation
    const swiper = new Swiper('.home-slider', {
      loop: true,
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
        <a href="#" className="logo">S.A.R.L <span>Cartayrade Vellas</span></a>
        <nav className="navbar">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#services">Services</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
        <form action="" className="search-form">
          <input type="search" name="" placeholder="Recherchez ici..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>
      </header>

      <section className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide" style={{ background: 'url(images/image_site_dom/slide_1.jpg) no-repeat' }}>
              <div className="content">
                <h3>Nous réalisons vos projets de plâtrerie et rénovation</h3>
                <p>Spécialisés dans les finitions intérieures, nous vous assurons un travail soigné et personnalisé.</p>
                <a href="#about" className="btn">En savoir plus</a>
              </div>
            </div>
            <div className="swiper-slide slide" style={{ background: 'url(images/image_site_dom/slide_2.jpg) no-repeat !important' }}>
              <div className="content">
                <h3>Votre intérieur, notre passion</h3>
                <p>Créons ensemble des espaces qui répondent à vos attentes, pour un confort optimal.</p>
                <a href="#about" className="btn">En savoir plus</a>
              </div>
            </div>
            <div className="swiper-slide slide" style={{ background: 'url(images/image_site_dom/slide_3.jpg) no-repeat' }}>
              <div className="content">
                <h3>Des finitions de qualité pour un intérieur unique</h3>
                <p>Plâtrerie, cloisonnement et isolation nous réalisons vos envies.</p>
                <a href="#about" className="btn">En savoir plus</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="heading">À propos de nous</h1>
        <div className="row">
          <div className="video">
            <video src="images/about-vid.mp4" loop muted autoPlay></video>
          </div>
          <div className="content">
            <h3 style={{ textTransform: 'unset' }}>Des experts en plâtrerie pour vos projets de rénovation</h3>
            <p>Forts de nombreuses années d'expérience, nous mettons notre savoir-faire artisanal au service de vos projets de construction et de rénovation.</p>
            <a href="#services" className="btn">Lire plus</a>
          </div>
        </div>
        <div className="box-container">
          <div className="box">
            <h3>18+</h3>
            <p>Années d'expérience</p>
          </div>
          <div className="box">
            <h3>550+</h3>
            <p>Projets neufs ou rénovations</p>
          </div>
          <div className="box">
            <h3>790+</h3>
            <p>Clients satisfaits</p>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h1 className="heading">Nos Services</h1>
        <div className="box-container">
          <div className="box">
            <img src="images/service-1.png" alt="Construction de bâtiments" />
            <h3>Isolation</h3>
            <p>Nous intervenons pour des projets d'isolation intérieure et/ou extérieure, en intégrant des finitions de haute qualité.</p>
          </div>
          <div className="box">
            <img src="images/service-2.png" alt="Rénovation d'intérieur" />
            <h3>Rénovation</h3>
            <p>Transformez votre intérieur avec notre expertise en rénovation.</p>
          </div>
          <div className="box">
            <img src="images/service-3.png" alt="Plâtrerie et cloisonnement" />
            <h3>Plâtrerie et Cloisonnement</h3>
            <p>Nous réalisons les travaux de plâtrerie et cloisons pour créer des espaces personnalisés.</p>
          </div>
        </div>
      </section>

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
          <a href="images/project-4.jpg" className="box">
            <div className="image">
              <img src="images/project-4.jpg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>
          <a href="images/project-5.jpg" className="box">
            <div className="image">
              <img src="images/project-5.jpg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>
          <a href="images/project-6.jpg" className="box">
            <div className="image">
              <img src="images/project-6.jpg" alt="" />
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
