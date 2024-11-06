import styles from '../styles/GlobalLocation.module.css'

function GlobalLocation() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-lg-5">
                    <h3 className={`${styles.globalLocationHeading}`}>Connecting with Us Globally</h3>
                </div>
                <div className="col-12">
                    <div className="row py-5 mt-4">
                        <div className="col-sm-6 col-lg-3">
                            <div className={`${styles.locationBox}`}>
                                <img src="/src/assets/images/260x300.webp" alt="Sigma 6 Digital Location" className={`${styles.locationBoxImage}`} />
                                <h4 className={`${styles.locationBoxHeading}`}>United Kingdom</h4>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className={`${styles.locationBox}`}>
                                <img src="/src/assets/images/260x300.webp" alt="Sigma 6 Digital Location" className={`${styles.locationBoxImage}`} />
                                <h4 className={`${styles.locationBoxHeading}`}>United States</h4>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className={`${styles.locationBox}`}>
                                <img src="/src/assets/images/260x300.webp" alt="Sigma 6 Digital Location" className={`${styles.locationBoxImage}`} />
                                <h4 className={`${styles.locationBoxHeading}`}>Saudi Arabia</h4>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className={`${styles.locationBox}`}>
                                <img src="/src/assets/images/260x300.webp" alt="Sigma 6 Digital Location" className={`${styles.locationBoxImage}`} />
                                <h4 className={`${styles.locationBoxHeading}`}>United Arab Emirates</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default GlobalLocation