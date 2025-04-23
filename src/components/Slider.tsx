  import React, { useState } from 'react';
  import styles from '../styles/Slider.module.css';
  import { Link } from 'react-router-dom';
  import heroSlider1 from '../assets/videos/hero-slider-1.mp4';
  import heroSlider2 from '../assets/videos/hero-slider-2.mp4';
  import heroSlider1Thumbnail from '../assets/images/hero-slider-1-thumbnail.webp';
  import heroSlider2Thumbnail from '../assets/images/hero-slider-2-thumbnail.webp';

  
interface SliderProps {
  language: string;
}
  const Slider: React.FC<SliderProps> = ({ language }) =>  {
    const [isVideo1Playing, setIsVideo1Playing] = useState(false);
    const [isVideo2Playing, setIsVideo2Playing] = useState(false);

    const handlePlay1 = () => {
      setIsVideo1Playing(true);
    };

    const handlePlay2 = () => {
      setIsVideo2Playing(true);
    };

    return (
      <>
        <div id="hero-section-slider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className={`${styles.heroVideoContainer} position-relative w-100 overflow-hidden`}>
                {!isVideo1Playing && (
                  <img
                    src={heroSlider1Thumbnail}
                    alt="Video Thumbnail"
                    className={`${styles.heroVideoThumbnail} position-absolute w-100 h-100`}
                  />
                )}
                <video
                  className={`position-absolute w-100 h-100 ${styles.heroVideo}`}
                  autoPlay
                  muted
                  loop
                  onPlay={handlePlay1}
                >
                  <source src={heroSlider1} type="video/mp4" />
                </video>
                <div className={`${styles.heroVideoContentContainer} position-absolute text-white`}>
                {language === "en" ? (
        <h2 className={`${styles.heroVideoHeading}`}>Turning Ideas into Digital Solutions</h2>
      ) : (
        <h2 className={`${styles.heroVideoHeading}`}>تحويل الأفكار إلى حلول رقمية</h2>
      )}
                  
                  <p className={`${styles.heroVideoParagraph}`}>
        {language === "en"
          ? "Expert web, app, and IT services designed to take your business to the next level."
          : "خدمات الويب والتطبيقات وتكنولوجيا المعلومات المتخصصة المصممة للارتقاء بأعمالك إلى المستوى التالي."}
      </p>
                  
                    
                  <Link to="/contact" className="text-decoration-none">

                    <button className={`${styles.heroCarouselBtn}`}>{language === "en"
                    ? "Get in Touch"
                    : "تواصل معنا"
                  }</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="20000">
              <div className={`${styles.heroVideoContainer} position-relative w-100 overflow-hidden`}>
                {!isVideo2Playing && (
                  <img
                    src={heroSlider2Thumbnail}
                    alt="Video Thumbnail"
                    className={`${styles.heroVideoThumbnail} position-absolute w-100 h-100`}
                  />
                )}
                <video
                  className={`position-absolute w-100 h-100 ${styles.heroVideo}`}
                  autoPlay
                  muted
                  loop
                  onPlay={handlePlay2}
                >
                  <source src={heroSlider2} type="video/mp4" />
                </video>
                <div className={`${styles.heroVideoContentContainer} position-absolute text-white`}>
                  <h2 className={`${styles.heroVideoHeading}`}>{language === "en"
                  
                  ? "Unlock the Future with AI Solutions"
                  : "افتح المستقبل مع حلول الذكاء الاصطناعي"
                }</h2>
                  <p className={`${styles.heroVideoParagraph}`}>
                    {language === "en"
                    ? "Elevate your operations with intelligent AI solutions for tomorrow’s challenges."
                    : "قم بترقية عملياتك باستخدام حلول الذكاء الاصطناعي الذكية لمواجهة تحديات الغد."
                  }
                  </p>
                  <Link to="/contact" className="text-decoration-none">
                    <button className={`${styles.heroCarouselBtn}`}>{language === "en"
                    ? "Get in Touch"
                    : "تواصل معنا"
                  }</button>
                  </Link>
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
