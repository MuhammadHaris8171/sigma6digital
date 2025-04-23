import { Link } from "react-router-dom";
import styles from "../styles/Process.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { developmentProcess, developmentProcessAr } from "./data";

gsap.registerPlugin(ScrollTrigger);

interface ProcessProps {
  heading: string;
  buttonSrc: string;
  language: string;
}

function  Process({ heading, buttonSrc, language }: ProcessProps) {
  const contentSteps = useRef<HTMLDivElement>(null);
  const stepsAreaRef = useRef<HTMLDivElement>(null);
  const imagesAreaRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const localizedProcess = language === "ar" ? developmentProcessAr : developmentProcess; // ✅ Dynamic process data

  useLayoutEffect(() => {
    const steps = contentSteps.current;
    const stepsArea = stepsAreaRef.current;
    const imagesArea = imagesAreaRef.current;
    const totalSteps = localizedProcess.length;
    const isMobile = window.innerWidth <= 767;

    if (isMobile) {
      const stepWidth = steps ? steps.offsetWidth : 0;
      const stepDistance = stepWidth * (totalSteps - 1);

      gsap.set(".stepImage:not(:first-child)", { left: "100%" });
      gsap.set(".step:last-child", { x: 0 });

      const timeline = gsap.timeline();
      timeline
        .to(".stepImage:not(:first-child)", { left: 0, duration: 1, stagger: 1 }, 0)
        .to(".step", { x: -stepDistance, duration: totalSteps + 1, stagger: 0, ease: "none" }, 0);

      if (stepsArea && imagesArea && progressBarRef.current) {
        ScrollTrigger.create({
          trigger: stepsArea,
          start: "top top",
          end: () => `+=${steps?.offsetWidth + "1" || 0}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const newWidth = Math.ceil(progress * 100);
            gsap.set(progressBarRef.current, { width: `${newWidth}%` });
          },
          animation: timeline,
        });
      }
    } else {
      gsap.set(".stepImage:not(:first-child)", { top: "100%" });
      gsap.set(".steps:not(:first-child)", { top: "100%" });

      const timeline = gsap.timeline();
      timeline
        .to(".stepImage:not(:first-child)", { top: 0, duration: 1, stagger: 1 }, 0)
        .to(".steps:not(:first-child)", { top: 0, duration: 1, stagger: 1 }, 0);

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
            gsap.set(progressBarRef.current, { height: `${newHeight}%` });
          },
          animation: timeline,
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [language, localizedProcess]); // ✅ Update animation on language change

  return (
    <div className={styles.verticleSlider}>
      <div className="container">
        <div className="row">
          <div className={styles.headingContainer}>
            <h2 className={styles.processMainHeading} dangerouslySetInnerHTML={{ __html: heading }} />
            <button className={styles.processView}>
              <Link to={buttonSrc} className="text-decoration-none">
                {language === "ar" ? "عرض المزيد" : "View More"} <FaLongArrowAltRight />
              </Link>
            </button>
          </div>
          <div className={`${styles.stepsArea} stepsArea d-flex`} ref={stepsAreaRef}>
            <div className={styles.contentArea}>
              <div className={`${styles.steps} steps position-relative`} ref={contentSteps}>
                <div className={`${styles.progressBar} position-absolute`} ref={progressBarRef}></div>
                {localizedProcess.map((item, index) => (
                  <div className={`${styles.step} step`} key={index}>
                    <h4 className={styles.stepsCount}>{`0${index + 1}/0${localizedProcess.length}`}</h4>
                    <h3 className={styles.stepHeading}>{item.heading}</h3>
                    <p className={styles.stepDescription}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.imagesArea} d-flex align-items-center justify-content-center`} ref={imagesAreaRef}>
              <div className={`${styles.galleryBox} position-relative overflow-hidden`}>
                {localizedProcess.map((item, index) => (
                  <div className={`${styles.stepImage} stepImage position-absolute w-100 h-100`} key={index}>
                    <img src={item.image} alt="Sigma 6 Digital" className="w-100 h-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
