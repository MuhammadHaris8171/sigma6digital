import AboutClient from "../../components/AboutClient"
import AboutFold from "../../components/AboutFold"
import BelieveIn from "../../components/BelieveIn"
import Cta from "../../components/Cta"
import PagesHero from "../../components/PagesHero"
// import Team from "../../components/Team"
import styles from "./About.module.css"
import { useOutletContext } from "react-router-dom"
import heroBackground1 from '../../assets/videos/hero-slider-2.mp4'
import heroThumbnail from '../../assets/images/page-hero-thumbnail.webp';

function About() {
  const translations = {
    en: {
      heading: "Helping Businesses Succeed in the Digital Age",
      description: "At Sigma6 Digital, we’re a team of professionals dedicated to providing solutions that help businesses grow. We turn your ideas into reality with effective strategies designed for your needs.",
      aboutFold: {
        heading: "Enhance Your Business Visibility with Sigma6 Digital",
        description: "At Sigma6 Digital, we focus on providing cutting-edge technology solutions that enable businesses to navigate the digital world with confidence. Our experienced team is dedicated to understanding your unique challenges and offering tailored services that drive growth, efficiency, and success. We utilize the latest technologies and industry best practices to create effective digital strategies. Together, we can turn your vision into reality and achieve lasting success in today’s competitive market.",
        points: [
          { heading: "99.5%", description: "Client Satisfaction" },
          { heading: "100+", description: "Projects Done" },
          { heading: "15+", description: "Global Clients" },
        ]
      }
    },
    ar: {
      heading: "مساعدة الشركات على النجاح في العصر الرقمي",
      description: "في Sigma6 Digital، نحن فريق من المحترفين مكرسون لتقديم حلول تساعد الشركات على النمو. نقوم بتحويل أفكارك إلى واقع من خلال استراتيجيات فعالة مصممة وفقًا لاحتياجاتك.",
      aboutFold: {
        heading: "عزز رؤية عملك مع Sigma6 Digital",
        description: "في Sigma6 Digital، نركز على تقديم حلول تكنولوجية متقدمة تمكن الشركات من التنقل في العالم الرقمي بثقة. يكرس فريقنا ذو الخبرة جهوده لفهم تحدياتك الفريدة وتقديم خدمات مخصصة تعزز النمو والكفاءة والنجاح. نحن نستخدم أحدث التقنيات وأفضل الممارسات في الصناعة لإنشاء استراتيجيات رقمية فعالة. معًا، يمكننا تحويل رؤيتك إلى واقع وتحقيق نجاح مستدام في السوق التنافسي اليوم.",
        points: [
          { heading: "99.5%", description: "رضا العملاء" },
          { heading: "100+", description: "المشاريع المنجزة" },
          { heading: "15+", description: "العملاء العالميون" },
        ]
      }
    }
  };
  // const points = [
  //   {heading: "99.5%", description: "Client Satisfaction"},
  //   {heading: "100+", description: "Project Done"},
  //   {heading: "15+", description: "Global Clients"},
  // ]
  const { language } = useOutletContext<{ language: string }>();

  return (
    <>
    <section id="abouthero" className={`${styles.aboutHero}`}>
      <PagesHero  heading={translations[language as "en" | "ar"]?.heading || "Helping Businesses Succeed in the Digital Age"} 
  description={translations[language as "en" | "ar"]?.description || "At Sigma6 Digital, we’re a team of professionals dedicated to providing solutions that help businesses grow. We turn your ideas into reality with effective strategies designed for your needs."} 
 videoLink={heroBackground1} thumbnail={heroThumbnail} />
    </section>
    <section id="about" className={`${styles.aboutMain}`}>
        <AboutFold
         heading={translations[language as "en" | "ar"]?.aboutFold.heading || translations.en.aboutFold.heading} 
         description={translations[language as "en" | "ar"]?.aboutFold.description || translations.en.aboutFold.description} 
         points={translations[language as "en" | "ar"]?.aboutFold.points || translations.en.aboutFold.points} 
         />
    </section>
    {/* <section id="About-team" className={`${styles.aboutTeam} position-relative`}>
      <Team />
    </section> */}
    <section id="About-Clients" className={`${styles.aboutClient}`}>
      <AboutClient language={language as 'en' | "ar"} />
    </section>
    <section id="what-we-believe" className={`${styles.aboutbelieve}`}>
      <BelieveIn language={language as "en" | "ar"} />
    </section>
    <Cta language={language} />
    </>
  )
}

export default About