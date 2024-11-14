import styles from './IndustriesPage.module.css'
import PagesHero from '../../components/PagesHero'

function IndustriesPage() {
  return (
    <section id="abouthero" className={styles.IndustriesHero}>
        <PagesHero 
            heading="Industries We Serve" 
            description="At Sigma6 Digital, we cater to a diverse range of industries, offering tailored digital solutions that empower businesses to thrive in their respective sectors. Our expertise spans various fields, ensuring each client receives a customized strategy that aligns with their unique industry requirements. Discover how we help businesses succeed across industries below."
            videoLink="https://sigma6digital.com/wp-content/uploads/2024/10/Comp-1-1.m4v" 
        />
    </section>
  )
}

export default IndustriesPage