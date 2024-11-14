import Cta from '../../components/Cta';
import PagesHero from '../../components/PagesHero'
import WorkProcess from '../../components/WorkProcess'
import styles from "./FAQ.module.css"
import { faqs } from '../../components/data';
import heroBackground1 from '../../assets/videos/hero-slider-2.mp4'

function FAQ() {
 
  return (
    <>
      <section id="faqhero">
        <PagesHero 
          heading="Frequently Asked Questions" 
          description="At Sigma 6 Digital, we understand that you may have questions about our services and processes. To help you make informed decisions, we’ve compiled a list of common inquiries from our clients. Explore the FAQs below to find answers and learn more about how we can support your business in the digital landscape." 
          videoLink={heroBackground1}
        />
      </section>
      <section className={styles.faqWorkProcess}>
        <WorkProcess 
          heading="Here's How We Get Things Done" 
          workSteps={faqs}
        />
      </section>
      <section>
        <Cta />
      </section>
    </>
  )
}

export default FAQ
