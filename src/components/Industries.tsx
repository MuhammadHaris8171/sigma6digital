import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Industries.module.css";
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { industriesData } from "./data";
import itSolutionsImg from '../assets/images/it-solutions.webp';

function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const totalItems = industriesData.length;
  const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 1199) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    // Initial call to set the items per page based on the current window size
    updateItemsPerPage();

    // Add event listener to handle window resize
    window.addEventListener("resize", updateItemsPerPage);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const scrollTo = (index: number) => {
    if (carouselRef.current) { 
      const item = carouselRef.current.children[index * itemsPerPage] as HTMLElement;
      if (item) {
        const scrollAmount = item.offsetWidth;
        carouselRef.current.scrollTo({
          left: scrollAmount * index,
          behavior: 'smooth',
        });
        setCurrentIndex(index);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      scrollTo(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollTo(currentIndex - 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-5 col-lg-4">
          <div className={`${styles.industriesMainContentBox} position-relative`}>
            <img src={itSolutionsImg} alt="Sigma 6 Digital" className={`${styles.industriesMainImage} positon-absolute`} />
            <div className={`${styles.industriesMainContent} position-relative`}>
              <h2 className={`${styles.industriesHeading} pb-2`}>Industries We Serve</h2>
              <p className={`${styles.industriesDescription}`}>
                At Sigma6 Digital, we provide customized digital solutions that help businesses across various industries grow and succeed. Our expertise drives innovation and efficiency in key sectors.
              </p>
            </div>
              <button className={`${styles.industriesButton} btn bg-transparent position-absolute`}>
                <Link to="#" className={`${styles.industriesButtonLink} text-decoration-none`}>
                  View More <FaLongArrowAltRight />
                </Link>
              </button>
          </div>
        </div>
        <div className="col-sm-6 col-md-7 col-lg-8 position-relative multi-carousel"> 
          <div className="row flex-nowrap overflow-hidden" ref={carouselRef}>
            {industriesData.map((item, index) => (
              <div className="col-12 col-lg-5 col-xl-4" key={index}>
                <div className={`${styles.industryBox}`}>
                  <div className={`${styles.industryBoxContent} position-relative`}>
                    <h4 className={`${styles.industryHeading}`}>{item.heading}</h4>
                    <p className={`${styles.industryDescription} mb-5 mb-sm-3 mt-3`}>{item.description}</p>
                    <p className={`${styles.industrypoint} mb-5 mb-sm-2`}>{item.point_1}</p>
                    <p className={`${styles.industrypoint} `}>{item.point_2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${styles.industrycrouselClient} d-flex align-items-center`}>
            <button 
              className={`btn ${styles.previous} ${styles.industryControlBtn}`} 
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <button 
              className={`btn ${styles.next} ${styles.industryControlBtn}`} 
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
