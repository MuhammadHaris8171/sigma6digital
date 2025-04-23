import styles from './IndustriesPage.module.css'
import PagesHero from '../../components/PagesHero'
import AboutFold from '../../components/AboutFold'
import Industries from '../../components/Industries'
import BelieveIn from '../../components/BelieveIn'
import Cta from '../../components/Cta'
import heroBackground1 from '../../assets/videos/hero-slider-2.mp4'
import heroThumbnail from '../../assets/images/page-hero-thumbnail.webp';
import { useOutletContext } from 'react-router-dom'
interface OutletContextType {
  language: "en" | "ar"; // Adjust based on actual values
}


function IndustriesPage() {
  const { language } = useOutletContext<OutletContextType>();
  const translations = {
    en: {
      heroHeading: "Industries We Serve",
      heroDescription:
        "At Sigma6 Digital, we cater to a diverse range of industries, offering tailored digital solutions that empower businesses to thrive in their respective sectors. Our expertise spans various fields, ensuring each client receives a customized strategy that aligns with their unique industry requirements. Discover how we help businesses succeed across industries below.",
      aboutHeading: "Helping Different Industries with Digital Solutions",
      aboutDescription:
        "At Sigma6 Digital, we partner with a variety of industries to deliver customized digital solutions that address each sector’s unique challenges and goals. From enhancing customer experiences in retail to streamlining operations in healthcare, our expertise spans multiple fields, ensuring each client achieves measurable success through technology. Explore the industries we serve and discover how our solutions drive digital transformation across sectors.",
    },
    ar: {
      heroHeading: "الصناعات التي نخدمها",
      heroDescription:
        "في Sigma6 Digital، نحن نخدم مجموعة متنوعة من الصناعات، ونقدم حلولًا رقمية مخصصة تمكّن الشركات من الازدهار في مجالاتها. يمتد خبرتنا عبر مختلف المجالات، مما يضمن حصول كل عميل على استراتيجية مخصصة تتماشى مع متطلبات مجاله الفريدة. اكتشف كيف نساعد الشركات على النجاح عبر الصناعات أدناه.",
      aboutHeading: "مساعدة الصناعات المختلفة بحلول رقمية",
      aboutDescription:
        "في Sigma6 Digital، نتعاون مع مجموعة متنوعة من الصناعات لتقديم حلول رقمية مخصصة تعالج التحديات والأهداف الفريدة لكل قطاع. من تحسين تجارب العملاء في التجزئة إلى تبسيط العمليات في الرعاية الصحية، تمتد خبرتنا عبر مجالات متعددة، مما يضمن تحقيق كل عميل لنجاح ملموس من خلال التكنولوجيا. استكشف الصناعات التي نخدمها واكتشف كيف تدفع حلولنا التحول الرقمي عبر القطاعات.",
    },
  };
  return (
    <>
      <section id="abouthero" className={styles.IndustriesHero}>
          <PagesHero 
                  heading={translations[language as "en" | "ar"]?.heroHeading}
                  description={translations[language as "en" | "ar"]?.heroDescription}
                  videoLink={heroBackground1}
              thumbnail={heroThumbnail}
          />
      </section>
      <section className={`${styles.industriesDetailSection} py-5 my-5`}>
        <AboutFold 
            heading={translations[language as "en" | "ar"]?.aboutHeading}
            description={translations[language as "en" | "ar"]?.aboutDescription}
        />
      </section>
      <section className={`${styles.industrySection} py-5 my-5`}>
        <Industries language={language} />
      </section>
      <section className={`${styles.industryBelieve}`}>
        <BelieveIn language={language} />
      </section>
      <section>
          <Cta language={language} />
      </section>
      </>
  )
}

export default IndustriesPage