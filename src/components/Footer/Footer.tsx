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
                    <div className="col-md-3">
                      <h5 className={`${styles.footerHeading} mb-4`}>Services</h5>
                      <ul className="list-unstyled">
                        {services.map((item, index) => (
                          <li className={`${styles.footerlist}`} key={ `${item.name}-${index}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>{item.name} <FaArrowRightLong /></Link></li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h5 className={`${styles.footerHeading} mb-4`}>Industries</h5>
                      <ul className="list-unstyled">
                        {industriesData.map((item, index) => (
                          <li className={`${styles.footerlist}`} key={ `${item.heading}-${index}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>{item.heading} <FaArrowRightLong /></Link></li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h5 className={`${styles.footerHeading} mb-4`}>Socials</h5>
                      <ul className="list-unstyled">
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>Facebook <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>Instagram <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>Linkedin <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>Youtube <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>Twitter (x) <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>Tiktok <FaArrowRightLong /></Link></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h5 className={`${styles.footerHeading} mb-4`}>Quick Links</h5>
                      <ul className="list-unstyled">
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>About Us <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>Services <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>Careers <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>Our Team <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>Our Clients <FaArrowRightLong /></Link></li>
                        <li className={`${styles.footerlist}`}><Link to="#" className={`${styles.footerlistLink} text-decoration-none`}>Contact <FaArrowRightLong /></Link></li>
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