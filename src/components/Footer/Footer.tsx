import { FaArrowRightLong } from "react-icons/fa6"
import { industriesData, services,servicesAr } from "../data"
import styles from "./Footer.module.css"
import { Link } from "react-router-dom"
// import { useOutletContext } from "react-router-dom";

interface FooterProps {
  language: "en" | "ar";
}

const Footer: React.FC<FooterProps> = ({ language }) => {
 
  return (
    <>
        <footer className={`${styles.footer}`}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-6 col-md-3 mb-5 mb-sm-3 mb-md-0">
                      <h5 className={`${styles.footerHeading} mb-sm-4`}>{language === "en" ? "Services" : "الخدمات"}</h5>
                      <ul className="list-unstyled">
                        {(language === "en" ? services : servicesAr).map((item, index) => (
                          <li className={`${styles.footerlist}`} key={ `${item.name}-${index}`}><Link to={item.buttonSrc} className={`${styles.footerlistLink} text-decoration-none`}>{item.name} <FaArrowRightLong /></Link></li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5 mb-sm-3 mb-md-0">
                      <h5 className={`${styles.footerHeading} mb-sm-4`}> {language === "en" ? "Industries" : "الصناعات"}</h5>
                      <ul className="list-unstyled">
                        {industriesData.map((item, index) => (
                          <li className={`${styles.footerlist}`} key={ `${item.heading}-${index}`}><Link to={item.headingSrc ? item.headingSrc : "#"} className={`${styles.footerlistLink} text-decoration-none`}>{language === "en" ? item.heading : item.headingAr}<FaArrowRightLong /></Link></li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5 mb-sm-3 mb-md-0">
                      <h5 className={`${styles.footerHeading} mb-sm-4`}> {language === "en" ? "Socials" : "وسائل التواصل الاجتماعي"}</h5>
                      <ul className="list-unstyled">
                        <li className={`${styles.footerlist}`}><a href="https://www.facebook.com/people/Sigma6-Digital/61566837885730/" className={`${styles.footerlistLink} text-decoration-none`}>{language === "en" ? "Facebook" : "فيسبوك"} <FaArrowRightLong /></a></li>
                        <li className={`${styles.footerlist}`}><a href="https://www.instagram.com/sigma6.digital/" className={`${styles.footerlistLink} text-decoration-none`}> {language === "en" ? "Instagram" : "إنستغرام"} <FaArrowRightLong /></a></li>
                        <li className={`${styles.footerlist}`}><a href="https://www.linkedin.com/company/sigma6digital/ " className={`${styles.footerlistLink} text-decoration-none`}> {language === "en" ? "LinkedIn" : "لينكدإن"} <FaArrowRightLong /></a></li>
                        <li className={`${styles.footerlist}`}><a href="https://www.youtube.com/channel/UCflORopOAXUUB10ymxE4TXA" className={`${styles.footerlistLink} text-decoration-none`}>{language === "en" ? "YouTube" : "يوتيوب"} <FaArrowRightLong /></a></li>
                        <li className={`${styles.footerlist}`}><a href="https://x.com/Sigma6Digital" className={`${styles.footerlistLink} text-decoration-none`}>{language === "en" ? "Twitter (X)" : "تويتر (X)"} <FaArrowRightLong /></a></li>
                        <li className={`${styles.footerlist}`}><a href="https://www.tiktok.com/@sigma6digitalofficial" className={`${styles.footerlistLink} text-decoration-none`}>{language === "en" ? "TikTok" : "تيك توك"} <FaArrowRightLong /></a></li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5 mb-sm-3 mb-md-0">
                      <h5 className={`${styles.footerHeading} mb-sm-4`}>{language === "en" ? "Quick Links" : "روابط سريعة"}</h5>
                      <ul className="list-unstyled">
                        <li className={`${styles.footerlist}`}><Link to="/" className={`${styles.footerlistLink} text-decoration-none`}> {language === "en" ? "Home" : "الرئيسية"} <FaArrowRightLong /></Link></li>
                        {/* <li className={`${styles.footerlist}`}><Link to="/about-us" className={`${styles.footerlistLink} text-decoration-none`}>{language === "en" ? "About Us" : "معلومات عنا"} <FaArrowRightLong /></Link></li> */}
                        <li className={`${styles.footerlist}`}><Link to="/services" className={`${styles.footerlistLink} text-decoration-none`}> {language === "en" ? "Services" : "الخدمات"} <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="/faq" className={`${styles.footerlistLink} text-decoration-none`}>  {language === "en" ? "FAQ's" : "الأسئلة الشائعة"} <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="/Industries" className={`${styles.footerlistLink} text-decoration-none`}>{language === "en" ? "Industries" : "الصناعات"} <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="/contact" className={`${styles.footerlistLink} text-decoration-none`}>{language === "en" ? "Contact" : "اتصل بنا"} <FaArrowRightLong /></Link></li>
                      </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                      <p className={`${styles.copyrightClaim} mb-0 py-3`}><span>
    &copy; {new Date().getFullYear()} {language === "ar" ? "جميع الحقوق محفوظة." : "All Rights Reserved."}
  </span></p>                    
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer