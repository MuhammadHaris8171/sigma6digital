import styles from '../styles/GlobalLocation.module.css'
import type { GlobalLocation } from './data';

interface GlobalLocationProps {
  locations: GlobalLocation[];
}

function GlobalLocation({ locations }: GlobalLocationProps) {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-lg-7">
                    <h3 className={`${styles.globalLocationHeading}`}>Connecting with Us Globally</h3>
                </div>
                <div className="col-12">
                    <div className="row py-5 mt-4 mt-md-0">
                        {locations.map((location, index) => (
                            <div key={index} className="col-sm-6 col-lg-3">
                                <div className={`${styles.locationBox}`}>
                                <img
                                    src={location.image}
                                    alt={`${location.heading} Location`}
                                    className={`${styles.locationBoxImage}`}
                                />
                                <h4 className={`${styles.locationBoxHeading}`}>{location.heading}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default GlobalLocation