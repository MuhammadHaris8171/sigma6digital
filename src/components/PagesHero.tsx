import React from 'react';
import styles from '../styles/PagesHero.module.css';

interface PagesHeroProps {
  heading: string;
  description: string;
  videoLink: string;
}

const PagesHero: React.FC<PagesHeroProps> = ({ heading, description, videoLink }) => {
  return (
    <div className={`position-relative`}>
      <video className={`${styles.pageVideo}`} autoPlay muted loop>
        <source src={videoLink} />
      </video>
      <div className={`${styles.pageHeroContent} position-absolute`}>
        <h2 className={`${styles.pageHeroHeading}`}>{heading}</h2>
        <p className={`${styles.pageHeroDescription}`}>{description}</p>
      </div>
    </div>
  );
};

export default PagesHero;
