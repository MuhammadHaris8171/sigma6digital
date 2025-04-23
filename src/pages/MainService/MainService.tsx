import ContentBox from '../../components/ContentBox'
import Cta from '../../components/Cta'
import SecondaryHeading from '../../components/SecondaryHeading'
import Services from '../../components/Services'
import styles from './MainService.module.css'
import TechnologiesWeUse from '../../components/TechnologiesWeUse'
// import { WebDevelopmentPageContent } from '../../components/data';
import { useOutletContext } from 'react-router-dom'
type ContentBoxType = {
    contentBoxheading: string;
    contentBoxDescription: string;
    contentBoxImage: string;
  };

  interface OutletContextType {
    language: "en" | "ar"; // Adjust based on actual values
  }
  
 

interface TechnologyBoxType {
    heading: string;
    services: string[];
}
interface Service {
    name: string;
    imgsrc: string;
    heading: string;
    description: string;
    button: string;
    buttonSrc: string;
}
  interface ServiceContent {
    heroSectionHeading: string;
    heroSectionDescription: string;
    heroSectionImage: string;
    contentBoxesContent: ContentBoxType[];
    servicesHeading: string;
    featureServices: Service[]; // Replace `any[]` with the correct type if known
    technologiesHeading: string;
    technologiesDescription: string;
    technologiesBoxes: TechnologyBoxType[];
}

// Define props for MainService
interface MainServiceProps {
    contentEn: ServiceContent;
    contentAr: ServiceContent;
}


const MainService: React.FC<MainServiceProps> = ({ contentEn, contentAr }) =>  {
    const {language} = useOutletContext<OutletContextType>();
    const content = language === "ar" ? contentAr : contentEn;
    console.log(content.featureServices)
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
            {content.contentBoxesContent.map((contentBox:ContentBoxType, index:number) => (
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
            <Services services={content.featureServices} displayAmount={-1}  />
        </section>
        <section className={`${styles.technologiesWeUse}`}>
            <TechnologiesWeUse
                technologiesHeading={content.technologiesHeading}
                technologiesDescription={content.technologiesDescription}
                technologiesBoxes={content.technologiesBoxes}
            />
        </section>
        <section>
          <Cta language={language} />
        </section>
    </>
  )
}

export default MainService