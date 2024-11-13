import React from 'react';
import styles from '../styles/TechnologiesWeUse.module.css'
import { TechnologiesBox } from '../components/data';

interface TechnologiesWeUseProps {
  technologiesHeading: string;
  technologiesDescription: string;
  technologiesBoxes: TechnologiesBox[];
}

const TechnologiesWeUse: React.FC<TechnologiesWeUseProps> = ({
  technologiesHeading,
  technologiesDescription,
  technologiesBoxes
}) => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-10 col-lg-8">
                <h2 className={`${styles.technologiesHeading}`}>{technologiesHeading}</h2>
                <p className={`${styles.technologiesPara}`}>{technologiesDescription}</p>
            </div>
            <div className="col-12">
                <div className="row">
                    {technologiesBoxes.map((box, index) => (
                        <React.Fragment key={index}>
                            <div className="col-12">
                            <h4 className={styles.technologyHeading}>{box.heading}</h4>
                            </div>
                            {box.services.map((service, serviceIndex) => (
                            <div
                                key={serviceIndex}
                                className="col-6 col-sm-4 col-lg-3 mb-4 mb-lg-3"
                            >
                                <div className={styles.technologyBox}>
                                <p className="mb-0">{service}</p>
                                </div>
                            </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TechnologiesWeUse