import AboutClient from "../../components/AboutClient"
import AboutFold from "../../components/AboutFold"
import BelieveIn from "../../components/BelieveIn"
import Cta from "../../components/Cta"
import PagesHero from "../../components/PagesHero"
// import Team from "../../components/Team"
import styles from "./About.module.css"
import heroBackground1 from '../../assets/videos/hero-slider-2.mp4'
import heroThumbnail from '../../assets/images/page-hero-thumbnail.webp';

function About() {
  const points = [
    {heading: "99.5%", description: "Client Satisfaction"},
    {heading: "100+", description: "Project Done"},
    {heading: "15+", description: "Global Clients"},
  ]
  return (
    <>
    <section id="abouthero" className={`${styles.aboutHero}`}>
      <PagesHero heading="Helping Businesses Succeed in the Digital Age" description="At Sigma6 Digital, we’re a team of professionals dedicated to providing solutions that help businesses grow. We turn your ideas into reality with effective strategies designed for your needs." videoLink={heroBackground1} thumbnail={heroThumbnail} />
    </section>
    <section id="about" className={`${styles.aboutMain}`}>
        <AboutFold heading="Enhance Your Business Visibility with Sigma6 Digital" description="At Sigma6 Digital, we focus on providing cutting-edge technology solutions that enable businesses to navigate the digital world with confidence. Our experienced team is dedicated to understanding your unique challenges and offering tailored services that drive growth, efficiency, and success.We utilize the latest technologies and industry best practices to create effective digital strategies. Together, we can turn your vision into reality and achieve lasting success in today’s competitive market." points={points} />
    </section>
    {/* <section id="About-team" className={`${styles.aboutTeam} position-relative`}>
      <Team />
    </section> */}
    <section id="About-Clients" className={`${styles.aboutClient}`}>
      <AboutClient />
    </section>
    <section id="what-we-believe" className={`${styles.aboutbelieve}`}>
      <BelieveIn />
    </section>
    <Cta />
    </>
  )
}

export default About