import Cta from '../../components/Cta'
import Industries from '../../components/Industries'
import PagesHero from '../../components/PagesHero'
import SecondaryHeading from '../../components/SecondaryHeading'
import Services from '../../components/Services'
import WorkProcess from '../../components/WorkProcess'
import styles from './ServicesPage.module.css'
import workImg from '../../assets/images/475x845.webp'
import { services } from "../../components/data";

interface WorkItem {
  question: string;
  answer: string;
}

const workSteps: WorkItem[] = [
  {
    question: "Discovery & Consultation",
    answer: "We start by getting to know your business, your goals, and the challenges you're facing. This initial consultation helps us understand exactly what you need to achieve."
  },
  {
    question: "Strategy & Planning",
    answer: "Once we’ve pinpointed your goals, we craft a strategic plan. This includes detailed project timelines, key milestones, and a roadmap that aligns with your vision and budget."
  },
  {
    question: "Design & Development",
    answer: "Our design and development teams work collaboratively to bring your ideas to life. We focus on creating a user-centric experience, blending aesthetics with functionality, and ensuring everything is technically sound."
  },
  {
    question: "Testing & Optimization",
    answer: "Before launch, every solution undergoes rigorous testing to make sure it’s performing optimally. We troubleshoot, refine, and enhance, so you get a flawless final product."
  },
  {
    question: "Launch & Support",
    answer: "With everything in place, we go live! But our commitment doesn’t stop there. We offer ongoing support and maintenance, ensuring your solutions stay updated, secure, and fully functional."
  },
  {
    question: "Feedback & Continuous Improvement",
    answer: "Your feedback is invaluable to us. We use it to refine our processes and continue enhancing our services, making sure we stay at the forefront of innovation."
  },
];

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
          workSteps={workSteps} 
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
