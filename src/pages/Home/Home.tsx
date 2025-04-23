import AboutFold from '../../components/AboutFold'
import Cta from '../../components/Cta'
// import FeatureSlider from '../../components/FeatureSlider'
import Industries from '../../components/Industries'
import Process from '../../components/Process'
import SecondaryHeading from '../../components/SecondaryHeading'
import Services from '../../components/Services'
import Slider from '../../components/Slider'
import styles from './Home.module.css'
import { services,servicesAr } from "../../components/data";
import { useOutletContext } from "react-router-dom";
interface OutletContextType {
  language: "en" | "ar"; // Adjust based on actual values
}


function Home() {
  const { language } = useOutletContext<OutletContextType>();
  const points = [
    {heading: "99.5%", description: language === "ar" ? "رضا العملاء" : "Client Satisfaction"},
    {heading: "100+", description: language === "ar" ? "مشروع مكتمل" : "Project Done" },
    {heading: "15+", description: language === "ar" ? "عملاء عالميون" : "Global Clients" },
  ]
  return (
    <>
        <Slider language={language} />
        {/* <FeatureSlider /> */}
        <section id="Services" className='pb-5'>
          <div className={`${styles.headingContainer}`}>
            <SecondaryHeading   heading={language === "ar" ? "ماذا نقدم" : "What We Offer"}
            buttonText={language === "ar" ? "عرض جميع الخدمات" : "View All Services"}
            buttonsrc="/services/" />
          </div>
        <Services services={language === 'ar' ? servicesAr : services} displayAmount={-1} />
        </section>
        <section id="process" className={`${styles.processSection} mt-5`}>
        <Process heading={language === "ar" ? "عملية التطوير" : "Development Process"} buttonSrc="/process" language={language} />
        </section>
        <section id="About" className={`${styles.aboutSection} py-5 my-5`}>
  <AboutFold
    heading={
      language === "ar"
        ? "شريكك الموثوق في التحول الرقمي"
        : "Your Trusted Partner in Digital Transformation"
    }
    description={
      language === "ar"
        ? "في سيجما 6 ديجيتال، نحن ملتزمون بتقديم حلول ويب وتطبيقات مبتكرة، وتقنيات الذكاء الاصطناعي المتقدمة، ودعم تكنولوجيا المعلومات الموثوق. يضمن نهجنا الذي يركز على العميل فهم احتياجاتك الفريدة والعمل معًا لمساعدتك على النجاح في العصر الرقمي."
        : "At Sigma 6 Digital, we are dedicated to delivering innovative web and app solutions, advanced AI technologies, and reliable IT support. Our client-focused approach ensures that we understand your unique needs and work collaboratively to help your business thrive in the digital age."
    }
    points={points}
  />
</section>

        <section id="Industries" className={`${styles.industrySection} py-5 my-5`}>
          <Industries language={language} />
        </section>
        <section id="call-to-action">
          <Cta language={language} />
        </section>
    </>
  )
}

export default Home