import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/Cta.module.css";
import ctaVideo from '../assets/videos/hero-slider-2.mp4'
import ContactFormTabs from "./ContactFormTabs";

function Cta({ language }: { language: string }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mediaQuery = window.matchMedia("(max-width: 575px)");

    const animateVideoContainer = () => {
      const startPoint = mediaQuery.matches ? "top 50%" : "top 80%"; 
      const heightValue = mediaQuery.matches ? "80svh" : "100svh";

      gsap.to(`.${styles.videoContainer}`, {
        scrollTrigger: {
          trigger: `.${styles.videoContainer}`,
          start: startPoint,
          end: "top 35%",
          scrub: true,
          toggleActions: "play none none none",
        },
        width: "100%",
        height: heightValue,
        margin: 0,
        duration: 1,
        ease: "power2.out",
        borderRadius: "0px",
      });
    };

    animateVideoContainer();

    window.addEventListener("resize", animateVideoContainer);

    return () => {
      window.removeEventListener("resize", animateVideoContainer);
    };
  }, []);

  return (
    <>
      <div className={`${styles.videoContainer} position-relative`}>
        <div className="container-fluid m-0 p-0">
          <video className={`${styles.ctaVideo}`} autoPlay muted loop>
            <source src={ctaVideo} />
          </video>
          <div
            className={`${styles.videoContentContainer} d-flex flex-column align-items-center gap-3`}
          >
            <h2 className={`${styles.ctaVideoHeading}`}>
            {language === "ar" ? "ابدأ رحلتك معنا اليوم" : "Begin your journey with us today."}
            </h2>
            <button className={`btn ${styles.ctaBtn} overflow-hidden`}>
              <span>{language === "ar" ? "ابدأ الآن" : "Get Started Now"}</span>
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.ctaContentBox}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-9 m-auto">
              <h3 className={`${styles.ctaContentBoxHeading} text-center mb-5`}>
              {language === "ar" ? "نحن على بعد نقرة واحدة فقط!" : "We're Just a Click Away!"}
              </h3>
              <div className={`${styles.ctaForm}`}>
                <ContactFormTabs language={language as "en" | "ar"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cta;
