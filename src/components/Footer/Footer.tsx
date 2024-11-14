import { FaArrowRightLong } from "react-icons/fa6"
import { industriesData, services } from "../data"
import styles from "./Footer.module.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
        <footer className={`${styles.footer}`}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-6 col-md-3 mb-5 mb-sm-3 mb-md-0">
                      <h5 className={`${styles.footerHeading} mb-sm-4`}>Services</h5>
                      <ul className="list-unstyled">
                        {services.map((item, index) => (
                          <li className={`${styles.footerlist}`} key={ `${item.name}-${index}`}><Link to={item.buttonSrc} className={`${styles.footerlistLink} text-decoration-none`}>{item.name} <FaArrowRightLong /></Link></li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5 mb-sm-3 mb-md-0">
                      <h5 className={`${styles.footerHeading} mb-sm-4`}>Industries</h5>
                      <ul className="list-unstyled">
                        {industriesData.map((item, index) => (
                          <li className={`${styles.footerlist}`} key={ `${item.heading}-${index}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>{item.heading} <FaArrowRightLong /></Link></li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5 mb-sm-3 mb-md-0">
                      <h5 className={`${styles.footerHeading} mb-sm-4`}>Socials</h5>
                      <ul className="list-unstyled">
                        <li className={`${styles.footerlist}`}><a href="https://www.facebook.com/people/Sigma6-Digital/61566837885730/" className={`${styles.footerlistLink} text-decoration-none`}>Facebook <FaArrowRightLong /></a></li>
                        <li className={`${styles.footerlist}`}><a href="https://www.instagram.com/sigma6.digital/" className={`${styles.footerlistLink} text-decoration-none`}>Instagram <FaArrowRightLong /></a></li>
                        <li className={`${styles.footerlist}`}><a href="https://www.linkedin.com/company/sigma6digital/ " className={`${styles.footerlistLink} text-decoration-none`}>Linkedin <FaArrowRightLong /></a></li>
                        <li className={`${styles.footerlist}`}><a href="https://www.youtube.com/channel/UCflORopOAXUUB10ymxE4TXA" className={`${styles.footerlistLink} text-decoration-none`}>Youtube <FaArrowRightLong /></a></li>
                        <li className={`${styles.footerlist}`}><a href="https://x.com/Sigma6Digital" className={`${styles.footerlistLink} text-decoration-none`}>Twitter (x) <FaArrowRightLong /></a></li>
                        <li className={`${styles.footerlist}`}><a href="https://www.tiktok.com/@sigma6digitalofficial" className={`${styles.footerlistLink} text-decoration-none`}>Tiktok <FaArrowRightLong /></a></li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5 mb-sm-3 mb-md-0">
                      <h5 className={`${styles.footerHeading} mb-sm-4`}>Quick Links</h5>
                      <ul className="list-unstyled">
                        <li className={`${styles.footerlist}`}><Link to="/" className={`${styles.footerlistLink} text-decoration-none`}>Home <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="/about-us" className={`${styles.footerlistLink} text-decoration-none`}>About Us <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="/services" className={`${styles.footerlistLink} text-decoration-none`}>Services <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="/faq" className={`${styles.footerlistLink} text-decoration-none`}>FAQ's <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="/Industries" className={`${styles.footerlistLink} text-decoration-none`}>Industries <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="/contact" className={`${styles.footerlistLink} text-decoration-none`}>Contact <FaArrowRightLong /></Link></li>
                      </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                      <p className={`${styles.copyrightClaim} mb-0 py-3`}><span>&copy; {new Date().getFullYear()} All Rights Reserved.</span> <span>Developed by <a href="https://linkedin.com/m-rameez/" className={`${styles.creatorLink} text-decoration-none`}>Muhammad Rameez</a></span></p>                    
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer