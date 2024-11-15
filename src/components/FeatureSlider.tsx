import React from 'react';
import styles from '../styles/FeatureSlider.module.css';
import Marquee from "react-fast-marquee";
import {features} from './data';
import { Feature } from './data';

const FeatureSlider: React.FC = () => {
  return (
    <>
      <div className={`container-fluid w-100 overflow-hidden d-flex ${styles.featureRow}`}>
        <Marquee speed={80}>
          {features.map((item: Feature, index: number) => (
            <h4 className={`${styles.featureSliderName}`} key={index}>{item.name}</h4>
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default FeatureSlider;
