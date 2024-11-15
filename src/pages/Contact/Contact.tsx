import ContactDetail from '../../components/ContactDetail'
import GlobalLocation from '../../components/GlobalLocation'
import PagesHero from '../../components/PagesHero'
import styles from './Contact.module.css'
import { globalLocation } from '../../components/data'
import heroBackground1 from '../../assets/videos/hero-slider-2.mp4'

interface ContactInfo {
  heading: string;
  description: string;
}
const contactInformation: ContactInfo[] = [
  { heading: "Address", description: "46 Skylines Village, 1st Floor, Canary Wharf, London, E14 9TS" },
  { heading: "Phone", description: "(+44) 7454 759329" },
];

function Contact() {
  return (
    <>
        <section id="contactHero">
            <PagesHero 
            heading="Let’s Build Something Great Together" 
            description="Have questions or ready to start your digital journey with Sigma 6 Digital? Reach out to our team of experts. Simply fill out the form, give us a call, or drop an email—we’d love to connect and discuss how we can bring your vision to life." 
            videoLink={heroBackground1}
            />
        </section>
        <section id="contactDetail" className={`${styles.contactDetailSection}`}>
            <ContactDetail 
            heading="Get in Touch with Us" 
            description="We’re here to answer your questions and explore how Sigma 6 Digital can support your goals. Just fill out the form below, and a member of our team will reach out soon. Let’s start building something exceptional together!" 
            contactBox={contactInformation}
            />
        </section>
        <section id="contactGlobal" className={styles.contactDetailGlobal}>
            <GlobalLocation locations={globalLocation} />
        </section>
    </>
  )
}

export default Contact