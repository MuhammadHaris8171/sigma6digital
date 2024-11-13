import Cta from '../../components/Cta'
import Industries from '../../components/Industries'
import PagesHero from '../../components/PagesHero'
import SecondaryHeading from '../../components/SecondaryHeading'
import Services from '../../components/Services'
import WorkProcess from '../../components/WorkProcess'
import styles from './ServicesPage.module.css'
import workImg from '../../assets/images/475x845.webp'
import { developmentProcess, services } from "../../components/data";

function ServicesPage() {
  return (
    <>
      <section id="abouthero" className={styles.aboutHero}>
        <PagesHero 
          heading="Explore our wide range of services" 
          description="At Sigma6 Digital, we offer a comprehensive range of services designed to help your business thrive in the digital landscape. Our expert team is dedicated to delivering high-quality solutions that cater to your specific needs. Explore our core services below." 
          videoLink="https://sigma6digital.com/wp-content/uploads/2024/10/Comp-1-1.m4v" 
        />
      </section>
      <section id="Main-Services" className={`pb-5 ${styles.servicesBox}`}>
        <div className={styles.headingContainer}>
          <SecondaryHeading 
            heading="What We Offer" 
            buttonText="View All Services" 
            buttonsrc="/services/" 
          />
        </div>
        <Services services={services} displayAmount={-1} />
      </section>
      <section id="work" className={styles.aboutWorkProcess}>
        <WorkProcess 
          heading="Here's How We Get Things Done" 
          workSteps={developmentProcess} 
          workImg={workImg}
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
