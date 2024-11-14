import AboutFold from '../../components/AboutFold'
import Cta from '../../components/Cta'
import FeatureSlider from '../../components/FeatureSlider'
import Industries from '../../components/Industries'
import Process from '../../components/Process'
import SecondaryHeading from '../../components/SecondaryHeading'
import Services from '../../components/Services'
import Slider from '../../components/Slider'
import styles from './Home.module.css'
import { developmentProcess, services } from "../../components/data";

function Home() {
  const points = [
    {heading: "99.5%", description: "Client Satisfaction"},
    {heading: "100+", description: "Project Done"},
    {heading: "15+", description: "Global Clients"},
  ]
  return (
    <>
        <Slider />
        <FeatureSlider />
        <section id="Services" className='pb-5'>
          <div className={`${styles.headingContainer}`}>
            <SecondaryHeading heading="What We Offer" buttonText="View All Services" buttonsrc="/services/" />
          </div>
        <Services services={services} displayAmount={4} />
        </section>
        <section id="process" className={`${styles.processSection} mt-5`}>
          <Process heading="Our product<br><span>development process.</span>" buttonSrc="/about" developmentProcess={developmentProcess}/>
        </section>
        <section id="About" className={`${styles.aboutSection} py-5 my-5`}>
          <AboutFold heading="Your Trusted Partner in Digital Transformation" description="At Sigma 6 Digital, we are dedicated to delivering innovative web and app solutions, advanced AI technologies, and reliable IT support. Our client-focused approach ensures that we understand your unique needs and work collaboratively to help your business thrive in the digital age." points={points} />
        </section>
        <section id="Industries" className={`${styles.industrySection} py-5 my-5`}>
          <Industries />
        </section>
        <section id="call-to-action">
          <Cta />
        </section>
    </>
  )
}

export default Home