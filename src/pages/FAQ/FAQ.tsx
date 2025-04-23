import Cta from '../../components/Cta';
import PagesHero from '../../components/PagesHero'
import WorkProcess from '../../components/WorkProcess'
import styles from "./FAQ.module.css"
import { faqs } from '../../components/data';
import heroBackground1 from '../../assets/videos/hero-slider-2.mp4'
import heroThumbnail from '../../assets/images/page-hero-thumbnail.webp';
import { useOutletContext } from 'react-router-dom';

interface OutletContextType {
  language: "en" | "ar";  // Explicitly define allowed values
}

function FAQ() {
  const { language } = useOutletContext<OutletContextType>();
 const faqData = faqs[language] || faqs.en; // Default to English if language is undefined

  const translations = {
    en: {
      heading: "Frequently Asked Questions",
      description:
        "At Sigma 6 Digital, we understand that you may have questions about our services and processes. To help you make informed decisions, we’ve compiled a list of common inquiries from our clients. Explore the FAQs below to find answers and learn more about how we can support your business in the digital landscape.",
      workProcessHeading: "Here's How We Get Things Done",
    },
    ar: {
      heading: "الأسئلة الشائعة",
      description:
        "في Sigma 6 Digital، ندرك أنك قد تكون لديك أسئلة حول خدماتنا وعملياتنا. لمساعدتك في اتخاذ قرارات مستنيرة، قمنا بتجميع قائمة بالأسئلة الشائعة من عملائنا. استكشف الأسئلة الشائعة أدناه للعثور على الإجابات ومعرفة المزيد حول كيفية دعم أعمالك في العالم الرقمي.",
      workProcessHeading: "إليك كيف نقوم بالأشياء",
    },
  };
  const langContent = translations[language] || translations.en;
  return (
    <>
      <section id="faqhero">
        <PagesHero 
            heading={langContent.heading}
            description={langContent.description}
          videoLink={heroBackground1}
          thumbnail={heroThumbnail}
        />
      </section>
      <section className={styles.faqWorkProcess}>
        <WorkProcess 
          heading={langContent.workProcessHeading} workSteps={faqData}
        />
      </section>
      <section>
        <Cta language={language} />
      </section>
    </>
  )
}

export default FAQ
