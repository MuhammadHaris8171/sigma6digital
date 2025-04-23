import Cta from '../../components/Cta'
import Industries from '../../components/Industries'
import PagesHero from '../../components/PagesHero'
import SecondaryHeading from '../../components/SecondaryHeading'
import Services from '../../components/Services'
import WorkProcess from '../../components/WorkProcess'
import styles from './ServicesPage.module.css'
import serviceWorkProcessImg from '../../assets/images/serviceWorkProcessImage.webp'
import { developmentProcess, developmentProcessAr, services,servicesAr } from "../../components/data";
import heroBackground1 from '../../assets/videos/hero-slider-2.mp4'
import heroThumbnail from '../../assets/images/page-hero-thumbnail.webp';
import { useOutletContext } from "react-router-dom";

interface OutletContextType {
  language: "en" | "ar"; // Adjust based on actual values
}
function ServicesPage() {
  const { language } = useOutletContext<OutletContextType>();
  const translations = {
    en: {
      heroHeading: "Explore our wide range of services",
      heroDescription: "At Sigma6 Digital, we provide a robust selection of services designed to help your business excel in the digital arena. Our expert team is dedicated to delivering high-quality solutions that cater to your specific needs. Explore our core services below.",
      offerHeading: "What We Offer",
      workHeading: "Here's How We Get Things Done",
    },
    ar: {
      heroHeading: "استكشف مجموعة خدماتنا الواسعة",
      heroDescription: "في Sigma6 Digital، نقدم مجموعة قوية من الخدمات المصممة لمساعدة عملك على التفوق في المجال الرقمي. يكرس فريقنا الخبير جهوده لتقديم حلول عالية الجودة تلبي احتياجاتك الخاصة. استكشف خدماتنا الأساسية أدناه.",
      offerHeading: "ما نقدمه",
      workHeading: "إليك كيف نقوم بإنجاز الأمور",
    }
  };

  return (
    <>
      <section id="abouthero" className={styles.aboutHero}>
        <PagesHero 
         heading={translations[language as "en" | "ar"].heroHeading}
         description={translations[language as "en" | "ar"].heroDescription}
          videoLink={heroBackground1}
          thumbnail={heroThumbnail}
        />
      </section>
      <section id="Main-Services" className={`pb-5 ${styles.servicesBox}`}>
        <div className={styles.headingContainer}>
          <SecondaryHeading 
            heading={translations[language as "en" | "ar"].offerHeading}
          />
        </div>
        <Services services={language === "ar" ? servicesAr : services} displayAmount={-1}  />
      </section>
      <section id="work" className={styles.aboutWorkProcess}>
        <WorkProcess 
           heading={translations[language as "en" | "ar"].workHeading}
           workSteps={language === "ar" ? developmentProcessAr : developmentProcess} 
          workImg={serviceWorkProcessImg}
        />
      </section>
      <section id="serviceIndustries" className={`${styles.serviceIndustrySection} py-5 my-5`}>
        <Industries language={language} />
      </section>
      <Cta language={language} />
    </>
  )
}

export default ServicesPage
