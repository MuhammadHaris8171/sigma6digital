import AboutFold from '../../components/AboutFold'
import Cta from '../../components/Cta'
import FeatureSlider from '../../components/FeatureSlider'
import Industries from '../../components/Industries'
import Process from '../../components/Process'
import SecondaryHeading from '../../components/SecondaryHeading'
import Services from '../../components/Services'
import Slider from '../../components/Slider'
import styles from './Home.module.css'

function Home() {
  return (
    <>
        <Slider />
        <FeatureSlider />
        <section id="Services" className='pb-5'>
          <div className={`${styles.headingContainer}`}>
            <SecondaryHeading heading="What We Offer" buttonText="View All Services" buttonsrc="/services/" />
          </div>
        <Services />
        </section>
        <section id="process" className={`${styles.processSection} mt-5`}>
          <Process heading="Our product<br><span>development process.</span>"/>
        </section>
        <section id="About" className={`${styles.aboutSection} py-5 my-5`}>
          <AboutFold />
        </section>
        <section id="Industries" className={`${styles.aboutSection} py-5 my-5`}>
          <Industries />
        </section>
        <section id="call-to-action">
          <Cta />
        </section>
    </>
  )
}

export default Home