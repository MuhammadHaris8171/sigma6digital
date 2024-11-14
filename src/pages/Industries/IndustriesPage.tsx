import styles from './IndustriesPage.module.css'
import PagesHero from '../../components/PagesHero'
import AboutFold from '../../components/AboutFold'
import Industries from '../../components/Industries'
import BelieveIn from '../../components/BelieveIn'
import Cta from '../../components/Cta'

function IndustriesPage() {
  return (
    <>
      <section id="abouthero" className={styles.IndustriesHero}>
          <PagesHero 
              heading="Industries We Serve" 
              description="At Sigma6 Digital, we cater to a diverse range of industries, offering tailored digital solutions that empower businesses to thrive in their respective sectors. Our expertise spans various fields, ensuring each client receives a customized strategy that aligns with their unique industry requirements. Discover how we help businesses succeed across industries below."
              videoLink="https://sigma6digital.com/wp-content/uploads/2024/10/Comp-1-1.m4v" 
          />
      </section>
      <section className={`${styles.industriesDetailSection} py-5 my-5`}>
        <AboutFold 
          heading="Helping Different Industries with Digital Solutions" 
          description="At Sigma6 Digital, we partner with a variety of industries to deliver customized digital solutions that address each sector’s unique challenges and goals. From enhancing customer experiences in retail to streamlining operations in healthcare, our expertise spans multiple fields, ensuring each client achieves measurable success through technology. Explore the industries we serve and discover how our solutions drive digital transformation across sectors." 
        />
      </section>
      <section className={`${styles.industrySection} py-5 my-5`}>
        <Industries />
      </section>
      <section className={`${styles.industryBelieve}`}>
        <BelieveIn />
      </section>
      <section>
          <Cta />
      </section>
      </>
  )
}

export default IndustriesPage