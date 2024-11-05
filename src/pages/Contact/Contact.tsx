import ContactDetail from '../../components/ContactDetail'
import Cta from '../../components/Cta'
import GlobalLocation from '../../components/GlobalLocation'
import PagesHero from '../../components/PagesHero'
import styles from './Contact.module.css'

function Contact() {
  return (
    <>
        <section id="contactHero">
            <PagesHero 
            heading="Let’s Build Something Great Together" 
            description="Have questions or ready to start your digital journey with Sigma 6 Digital? Reach out to our team of experts. Simply fill out the form, give us a call, or drop an email—we’d love to connect and discuss how we can bring your vision to life." 
            videoLink="https://sigma6digital.com/wp-content/uploads/2024/10/Comp-1-1.m4v" 
            />
        </section>
        <section id="contactDetail" className={`${styles.contactDetailSection}`}>
            <ContactDetail 
            heading="Get in Touch with Us" 
            description="We’re here to answer your questions and explore how Sigma 6 Digital can support your goals. Just fill out the form below, and a member of our team will reach out soon. Let’s start building something exceptional together!" 
            />
        </section>
        <section id="contactGlobal" className={styles.contactDetailGlobal}>
            <GlobalLocation />
        </section>
        <Cta />
    </>
  )
}

export default Contact