import ServiceBox from "./ServiceBox";
import styles from "./Services.module.css"
import { services } from "./data";

function Services() {
  return (
    <div className={`${styles.serviceContainer}`}>
        <div className="container">
            <div className="row">
                {services.slice(0, 4).map((item, index) => (
                <div className="col-3" key={index}>
                    <ServiceBox item={item} />
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Services;