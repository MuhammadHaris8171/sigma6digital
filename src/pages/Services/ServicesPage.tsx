import Cta from '../../components/Cta'
import Industries from '../../components/Industries'
import PagesHero from '../../components/PagesHero'
import SecondaryHeading from '../../components/SecondaryHeading'
import Services from '../../components/Services'
import WorkProcess from '../../components/WorkProcess'
import styles from './ServicesPage.module.css'
import serviceWorkProcessImg from '../../assets/images/serviceWorkProcessImage.webp'
import { developmentProcess, services } from "../../components/data";
import heroBackground1 from '../../assets/videos/hero-slider-2.mp4'
import heroThumbnail from '../../assets/images/hero-slider-2-thumbnail.webp';

function ServicesPage() {
  return (
    <>
      <section id="abouthero" className={styles.aboutHero}>
        <PagesHero 
          heading="Explore our wide range of services" 
          description="At Sigma6 Digital, we provide a robust selection of services designed to help your business excel in the digital arena. Our expert team is dedicated to delivering high-quality solutions that cater to your specific needs. Explore our core services below." 
          videoLink={heroBackground1}
          thumbnail={heroThumbnail}
        />
      </section>
      <section id="Main-Services" className={`pb-5 ${styles.servicesBox}`}>
        <div className={styles.headingContainer}>
          <SecondaryHeading 
            heading="What We Offer" 
          />
        </div>
        <Services services={services} displayAmount={-1} />
      </section>
      <section id="work" className={styles.aboutWorkProcess}>
        <WorkProcess 
          heading="Here's How We Get Things Done" 
          workSteps={developmentProcess} 
          workImg={serviceWorkProcessImg}
        />
      </section>
      <section id="serviceIndustries" className={`${styles.serviceIndustrySection} py-5 my-5`}>
        <Industries />
      </section>
      <Cta />
    </>
  )
}

export default ServicesPage
