import ContactDetail from '../../components/ContactDetail'
import GlobalLocation from '../../components/GlobalLocation'
import PagesHero from '../../components/PagesHero'
import styles from './Contact.module.css'
import { globalLocation } from '../../components/data'
import heroBackground1 from '../../assets/videos/hero-slider-2.mp4'
import heroThumbnail from '../../assets/images/page-hero-thumbnail.webp';
import { useOutletContext } from 'react-router-dom'

// interface ContactInfo {
//   heading: string;
//   description: string;
// }
const contactInformation = {
  en: [
    { heading: "Address", description: "46 Skylines Village, 1st Floor, Canary Wharf, London, E14 9TS" },
    { heading: "Phone", description: "(+44) 7454 759329" },
  ],
  ar: [
    { heading: "العنوان", description: "46 سكاي لاينز فيليج، الطابق الأول، كناري وارف، لندن، E14 9TS" },
    { heading: "الهاتف", description: "(+44) 7454 759329" },
  ]
};

interface OutletContextType {
  language: "en" | "ar";  // Explicitly define allowed values
}

function Contact() {
  const { language } = useOutletContext<OutletContextType>();
  return (
    <>
        <section id="contactHero">
            <PagesHero 
            heading={language === "ar" ? "لنُنشئ شيئًا رائعًا معًا" : "Let’s Build Something Great Together"} 
            description={language === "ar" 
              ? "هل لديك أسئلة أو جاهز لبدء رحلتك الرقمية مع Sigma 6 Digital؟ تواصل مع فريق الخبراء لدينا. ما عليك سوى ملء النموذج أو الاتصال بنا أو إرسال بريد إلكتروني—نحن نحب التواصل ومناقشة كيفية تحويل رؤيتك إلى واقع."
              : "Have questions or ready to start your digital journey with Sigma 6 Digital? Reach out to our team of experts. Simply fill out the form, give us a call, or drop an email—we’d love to connect and discuss how we can bring your vision to life."} 
            videoLink={heroBackground1}
            thumbnail={heroThumbnail}
            />
        </section>
        <section id="contactDetail" className={`${styles.contactDetailSection}`}>
            <ContactDetail 
            heading={language === "ar" ? "تواصل معنا" : "Get in Touch with Us"} 
            description={language === "ar" 
              ? "نحن هنا للإجابة على استفساراتك واستكشاف كيف يمكن لـ Sigma 6 Digital دعم أهدافك. ما عليك سوى ملء النموذج أدناه، وسيتواصل معك أحد أعضاء فريقنا قريبًا. لنبدأ في بناء شيء استثنائي معًا!"
              : "We’re here to answer your questions and explore how Sigma 6 Digital can support your goals. Just fill out the form below, and a member of our team will reach out soon. Let’s start building something exceptional together!"} 
            contactBox={language === "ar" ? contactInformation.ar : contactInformation.en}
            />
        </section>
        <section id="contactGlobal" className={styles.contactDetailGlobal}>
        <GlobalLocation locations={language === "ar" ? globalLocation.ar : globalLocation.en} />
        </section>
    </>
  )
}

export default Contact