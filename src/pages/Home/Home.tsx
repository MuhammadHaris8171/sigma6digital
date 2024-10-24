import FeatureSlider from '../../components/FeatureSlider'
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
    </>
  )
}

export default Home