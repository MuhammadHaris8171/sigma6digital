import styles from './AboutFold.module.css'
function AboutFold() {
  return (
    <>
    <div className={`container`}>
        <div className="row">
          <div className="col-lg-9 col-xl-8">
            <h2 className={`${styles.aboutHeading}`}>Your Trusted Partner in Digital Transformation</h2>
            <p className={`${styles.aboutDescription}`}>At Sigma 6 Digital, we are dedicated to delivering innovative web and app solutions, advanced AI technologies, and reliable IT support. Our client-focused approach ensures that we understand your unique needs and work collaboratively to help your business thrive in the digital age.</p>
          </div>
          <div className="col-12 pt-4">
            <div className="row">
              <div className="col-6 col-md-4">
                <div className={`${styles.aboutPoints}`}>
                  <h4 className={`${styles.aboutPointsHeading}`}>99.5%</h4>
                  <p className={`${styles.aboutPointDescription}`}>Client Satisfaction</p>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className={`${styles.aboutPoints}`}>
                  <h4 className={`${styles.aboutPointsHeading}`}>100+</h4>
                  <p className={`${styles.aboutPointDescription}`}>Project Done</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`${styles.aboutPoints}`}>
                  <h4 className={`${styles.aboutPointsHeading}`}>15+</h4>
                  <p className={`${styles.aboutPointDescription}`}>Global Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default AboutFold