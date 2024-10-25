import styles from "./Cta.module.css"

function Cta() {
  return (
    <>
    <div className={`${styles.videoContainer} position-relative`}>
        <div className="contianer-fluid">
            <video className={`${styles.ctaVideo}`} autoPlay muted loop>
                <source src='https://sigma6digital.com/wp-content/uploads/2024/10/02-1.m4v' />
            </video>
            <div className={`${styles.videoContentContainer} d-flex flex-column align-items-center gap-3`}>
                <h2 className={`${styles.ctaVideoHeading}`}>Begin your journey with us today.</h2>
                <button className={`btn ${styles.ctaBtn} overflow-hidden`}><span>Get Started Now</span></button>
            </div>
        </div>
    </div>
    <div className={`${styles.ctaContentBox}`}>
      <div className="container d-flex flex-column align-items-center justify-content-center gap-3">
      <h3 className={`${styles.ctaContentBoxHeading}`}>Digitize Your Business for Success!</h3>
      <button className={`btn ${styles.ctaBtn} overflow-hidden`}><span>Contact Us Now</span></button>
      </div>
    </div>
    </>
  )
}

export default Cta