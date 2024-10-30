import styles from '../styles/PagesHero.module.css'

function PagesHero() {
  return (
    <>
    <div className={`position-relative`}>
        <video className={`${styles.pageVideo}`} autoPlay muted loop>
            <source src="https://sigma6digital.com/wp-content/uploads/2024/10/Comp-1-1.m4v" />
        </video>
        <div className={`${styles.pageHeroContent} position-absolute`}>
            <h2 className={`${styles.pageHeroHeading}`}>Helping Businesses Succeed in the Digital Age</h2>
            <p className={`${styles.pageHeroDescription}`}>At Sigma6 Digital, we’re a team of professionals dedicated to providing solutions that help businesses grow. We turn your ideas into reality with effective strategies designed for your needs.</p>
        </div>
    </div>
    </>
  )
}

export default PagesHero