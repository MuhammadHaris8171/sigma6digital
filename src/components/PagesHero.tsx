import React, { useState } from 'react';
import styles from '../styles/PagesHero.module.css';

interface PagesHeroProps {
  heading: string;
  description: string;
  videoLink: string;
  thumbnail?: string;
}

const PagesHero: React.FC<PagesHeroProps> = ({ heading, description, videoLink, thumbnail }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handlePlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className={`position-relative`}>
      {!isVideoPlaying && (
        <img 
          src={thumbnail} 
          alt="Video thumbnail" 
          className={`${styles.pageVideoThumbnail}`} 
        />
      )}
      
      <video 
        className={`${styles.pageVideo}`} 
        autoPlay 
        muted 
        loop 
        onPlay={handlePlay}
      >
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
