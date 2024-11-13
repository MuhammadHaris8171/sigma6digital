import React from 'react';
import styles from '../styles/ContentBox.module.css';

interface ContentBoxProps {
  contentDirection: 'left' | 'right';
  contentBoxData: {
    contentBoxheading: string;
    contentBoxDescription: string;
    contentBoxImage: string;
  };
}

const ContentBox: React.FC<ContentBoxProps> = ({ contentDirection, contentBoxData }) => {
  const isLeft = contentDirection === 'left';

  return (
    <div className={`${styles.contentBoxContainer}`}>
      <div className="container">
        <div className="row">
          <div className={`col-md-6 d-flex align-items-center ${isLeft ? '' : `order-md-2 ${styles.contentLast}`}`}>
            <div className={`${styles.ContentBox}`}>
              <h3 className={`${styles.contentBoxHeading}`}>
                {contentBoxData.contentBoxheading}
              </h3>
              <p className={`${styles.contentBoxDescription} pt-2`}>
                {contentBoxData.contentBoxDescription}
              </p>
            </div>
          </div>
          <div className={`col-md-6 ${isLeft ? '' : `order-md-1 ${styles.imageFirst}`}`}>
            <div className={`${styles.contentBoxImageBox}`}>
              <img
                src={contentBoxData.contentBoxImage}
                alt="Sigma 6 Digital"
                className={`${styles.contentBoxImage}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBox;
