import ContentBox from '../../components/ContentBox'
import Cta from '../../components/Cta'
import SecondaryHeading from '../../components/SecondaryHeading'
import Services from '../../components/Services'
import styles from './MainService.module.css'
import TechnologiesWeUse from '../../components/TechnologiesWeUse'
import { WebDevelopmentPageContent } from '../../components/data';

interface MainServiceProps {
  content: WebDevelopmentPageContent;
}

const MainService: React.FC<MainServiceProps> = ({ content }) =>  {
  return (
    <>
        <section className={`${styles.mainServiceHero} d-flex align-items-center`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className={`${styles.mainServiceHeroContentBox}`}>
                        <h2 className={`${styles.mainServiceHeroHeading}`}>{content.heroSectionHeading}</h2>
                        <p className={`${styles.mainServiceHeroDescription}`}>{content.heroSectionDescription}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className={`d-flex justify-content-center`}>
                            <img src={content.heroSectionImage}  alt="Sigma 6 Digital" className={`${styles.mainServiceHeroImage} m-auto`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={`${styles.mainServiceContentBox}`}>
            {content.contentBoxesContent.map((contentBox, index) => (
                <ContentBox 
                    key={index}
                    contentDirection={index % 2 === 0 ? 'left' : 'right'}
                    contentBoxData={contentBox}
                />
            ))}
        </section>
        <section className={`${styles.subServices}`}>
            <div className={styles.headingContainer}>
                <SecondaryHeading 
                    heading={content.servicesHeading}
                />
            </div>
            <Services services={content.featureServices} displayAmount={-1} />
        </section>
        <section className={`${styles.technologiesWeUse}`}>
            <TechnologiesWeUse
                technologiesHeading={content.technologiesHeading}
                technologiesDescription={content.technologiesDescription}
                technologiesBoxes={content.technologiesBoxes}
            />
        </section>
        <section>
          <Cta />
        </section>
    </>
  )
}

export default MainService