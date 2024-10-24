import React from 'react';
import styles from './FeatureSlider.module.css';
import Marquee from "react-fast-marquee";
import {features} from './data';

// Define the type for each feature item
interface FeatureItem {
  src: string;
}

const FeatureSlider: React.FC = () => {
  return (
    <>
      <div className={`container-fluid w-100 overflow-hidden d-flex ${styles.featureRow}`}>
        <Marquee speed={80}>
          {features.map((item: FeatureItem, index: number) => (
            <img key={index} src={item.src} alt="Features Logo" className={`${styles.featureImage} me-3`} />
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default FeatureSlider;
