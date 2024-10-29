import AboutFold from "../../components/AboutFold"
import styles from "./About.module.css"

function About() {
  const points = [
    {heading: "99.5%", description: "Client Satisfaction"},
    {heading: "100+", description: "Project Done"},
    {heading: "15+", description: "Global Clients"},
  ]
  return (
    <>
    <div id="abouthero" className={`${styles.aboutHero}`}>
      <video autoPlay muted loop>
        <source src="https://sigma6digital.com/wp-content/uploads/2024/10/Comp-1-1.m4v" />
      </video>
    </div>
    <div id="about" className={`${styles.aboutHero}`}>
        <AboutFold heading="Your Trusted Partner in Digital Transformation" description="At Sigma 6 Digital, we are dedicated to delivering innovative web and app solutions, advanced AI technologies, and reliable IT support. Our client-focused approach ensures that we understand your unique needs and work collaboratively to help your business thrive in the digital age." points={points} />
    </div>
    </>
  )
}

export default About