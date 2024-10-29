import React from 'react';
import styles from '../styles/Slider.module.css';

const Slider: React.FC = () => {
  return (
    <>
      <div id="hero-section-slider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className={`${styles.heroVideoContainer} position-relative w-100 overflow-hidden`}>
              <video className={`position-absolute w-100 h-100 ${styles.heroVideo}`} autoPlay muted loop>
                <source src="https://sigma6digital.com/wp-content/uploads/2024/10/Comp-1-1.m4v" type="video/mp4" />
              </video>
              <div className={`${styles.heroVideoContentContainer} position-absolute text-white`}>
                <h2 className={`${styles.heroVideoHeading}`}>Turning Ideas into Digital Solutions</h2>
                <p className={`${styles.heroVideoParagraph}`}>
                  Expert web, app, and IT services designed to take your business to the next level.
                </p>
                <button className={`${styles.heroCarouselBtn}`}>Get in Touch</button>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="20000">
            <div className={`${styles.heroVideoContainer} position-relative w-100 overflow-hidden`}>
              <video className={`position-absolute w-100 h-100 ${styles.heroVideo}`} autoPlay muted loop>
                <source src="https://sigma6digital.com/wp-content/uploads/2024/10/02-1.m4v" type="video/mp4" />
              </video>
              <div className={`${styles.heroVideoContentContainer} position-absolute text-white`}>
                <h2 className={`${styles.heroVideoHeading}`}>Unlock the Future with AI Solutions</h2>
                <p className={`${styles.heroVideoParagraph}`}>
                  Elevate your operations with intelligent AI solutions for tomorrow’s challenges.
                </p>
                <button className={`${styles.heroCarouselBtn}`}>Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev hero-carousel-control" type="button" data-bs-target="#hero-section-slider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next hero-carousel-control" type="button" data-bs-target="#hero-section-slider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
