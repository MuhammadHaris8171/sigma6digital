import AboutFold from "../../components/AboutFold"
import PagesHero from "../../components/PagesHero"
import Team from "../../components/Team"
import styles from "./About.module.css"

function About() {
  const points = [
    {heading: "99.5%", description: "Client Satisfaction"},
    {heading: "100+", description: "Project Done"},
    {heading: "15+", description: "Global Clients"},
  ]
  return (
    <>
    <section id="abouthero" className={`${styles.aboutHero}`}>
      <PagesHero />
    </section>
    <div id="about" className={`${styles.aboutMain}`}>
        <AboutFold heading="Enhance Your Business Visibility with Sigma6 Digital" description="At Sigma6 Digital, we focus on providing cutting-edge technology solutions that enable businesses to navigate the digital world with confidence. Our experienced team is dedicated to understanding your unique challenges and offering tailored services that drive growth, efficiency, and success.We utilize the latest technologies and industry best practices to create effective digital strategies. Together, we can turn your vision into reality and achieve lasting success in today’s competitive market." points={points} />
    </div>
    <div id="team" className={`${styles.aboutTeam}`}>
      <Team />
    </div>
    </>
  )
}

export default About