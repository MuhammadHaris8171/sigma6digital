import { Link } from "react-router-dom";
import styles from "./Process.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ProcessProps {
  heading: string;
}

function Process({ heading }: ProcessProps) {
  const stepsAreaRef = useRef<HTMLDivElement>(null);
  const imagesAreaRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null); // Reference for the new progress bar

  useLayoutEffect(() => {
    const stepsArea = stepsAreaRef.current;
    const imagesArea = imagesAreaRef.current;

    gsap.set(".stepImage:not(:first-child)", { top: "100%" });
    const animation = gsap.to(".stepImage:not(:first-child)", { top: 0, duration: 1, stagger: 1 });

    if (stepsArea && imagesArea && progressBarRef.current) {
      ScrollTrigger.create({
        trigger: stepsArea,
        start: "top top",
        end: "bottom bottom",
        pin: imagesArea,
        pinSpacing: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const newHeight = Math.ceil(progress * 100);
          gsap.set(progressBarRef.current, { height: `${newHeight}%` }); // Target the new div
        },
        animation: animation,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
        <div className={styles.verticleSlider}>
          <div className="container">
            <div className="row">
              <div className={styles.headingContainer}>
                <h2
                  className={styles.processMainHeading}
                  dangerouslySetInnerHTML={{ __html: heading }}
                />
                <button className={styles.processView}>
                  <Link to="#" className="text-decoration-none">View More <FaLongArrowAltRight /></Link>
                </button>
              </div>
              <div className="stepsArea d-flex" ref={stepsAreaRef}>
                <div className={styles.contentArea}>
                  <div className={`${styles.steps} steps position-relative`}>
                    <div className={`${styles.progressBar} position-absolute`} ref={progressBarRef}></div>
                    {[...Array(6)].map((_, index) => (
                      <div className={`${styles.step}`} key={index}>
                        <h4 className={styles.stepsCount}>{`0${index + 1}/06`}</h4>
                        <h3 className={styles.stepHeading}>Ideate</h3>
                        <p className={styles.stepDescription}>
                          We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styles.imagesArea} d-flex align-items-center justify-content-center`} ref={imagesAreaRef}>
                  <div className={`${styles.galleryBox} position-relative overflow-hidden`}>
                    <div className={`${styles.stepImage} stepImage position-absolute w-100 h-100`}>
                        <img src="/src/assets/images/it-solutions.webp" alt="Sigma 6 Digital" className="w-100 h-100" />
                    </div>
                    <div className={`${styles.stepImage} stepImage position-absolute w-100 h-100`}>
                        <img src="/src/assets/images/AI-Solutions.webp" alt="Sigma 6 Digital" className="w-100 h-100" />
                    </div>
                    <div className={`${styles.stepImage} stepImage position-absolute w-100 h-100`}>
                        <img src="/src/assets/images/it-solutions.webp" alt="Sigma 6 Digital" className="w-100 h-100" />
                    </div>
                    <div className={`${styles.stepImage} stepImage position-absolute w-100 h-100`}>
                        <img src="/src/assets/images/AI-Solutions.webp" alt="Sigma 6 Digital" className="w-100 h-100" />
                    </div>
                    <div className={`${styles.stepImage} stepImage position-absolute w-100 h-100`}>
                        <img src="/src/assets/images/it-solutions.webp" alt="Sigma 6 Digital" className="w-100 h-100" />
                    </div>
                    <div className={`${styles.stepImage} stepImage position-absolute w-100 h-100`}>
                        <img src="/src/assets/images/AI-Solutions.webp" alt="Sigma 6 Digital" className="w-100 h-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Process;