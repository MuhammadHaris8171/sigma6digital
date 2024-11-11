import ContentBox from '../../components/ContentBox'
import Cta from '../../components/Cta'
import SecondaryHeading from '../../components/SecondaryHeading'
import Services from '../../components/Services'
import styles from './MainService.module.css'

function MainService() {
  return (
    <>
        <section className={`${styles.mainServiceHero} d-flex align-items-center`}>
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex align-items-center">
                        <div className={`${styles.mainServiceHeroContentBox}`}>
                        <h2 className={`${styles.mainServiceHeroHeading}`}>Build, Engage, and Grow with Cutting-Edge Web Development</h2>
                        <p className={`${styles.mainServiceHeroDescription}`}>Your website should do more than just exist—it should captivate, engage, and drive growth. At Sigma 6 Digital, we build high-performing, custom websites that bring your brand to life and help your business thrive in a digital world</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={`${styles.mainServiceHeroImageBox}`}>
                            <img src="/src/assets/images/main-service-delete.webp" alt="Sigma 6 Digital" className={`${styles.mainServiceHeroImage}`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mainServiceContentBox">
            <ContentBox contentDirection="left" />
        </section>
        <section className={`${styles.subServices}`}>
            <div className={styles.headingContainer}>
                <SecondaryHeading 
                    heading="The Complete Package for a Website That Stands Out"
                />
            </div>
            <Services />
        </section>
        <section>
          <Cta />
        </section>
    </>
  )
}

export default MainService