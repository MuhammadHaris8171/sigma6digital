import React from 'react';
import ServiceBox from "./ServiceBox";
import styles from "../styles/Services.module.css";
import { Service } from '../components/data';

interface ServicesProps {
  services: Service[];
  displayAmount: number;
}

const Services: React.FC<ServicesProps> = ({ services, displayAmount }) => {
  const localizedServices = services; // Here, 'services' is the prop passed from MainService.tsx.


  return (
    <div className={styles.serviceContainer}>
      <div className="container">
        <div className="row">
        {(displayAmount === -1 ? localizedServices : localizedServices.slice(0, displayAmount)).map(
            (item, index) => (  <div className={`col-md-6 col-xl-3 mb-sm-4 ${styles.serviceBoxContainer}`} key={index}>
              <ServiceBox item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
