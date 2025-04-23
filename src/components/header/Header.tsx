import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import lightLogo from '../../assets/images/sigma6_white_logo.webp';
import darkLogo from '../../assets/images/sigma6_dark_logo.webp';
import dropDownServiceImage from '../../assets/images/services-dropdown.webp';
import dropDownIndustryeImage from '../../assets/images/industry-dropdown.webp';
import styles from './Header.module.css';
import { IoMailSharp } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';
import NavDropdown from '../NavDropdown';
import { RxCross2 } from 'react-icons/rx';
import { TiArrowSortedDown } from 'react-icons/ti';
import { MdKeyboardArrowRight } from 'react-icons/md';
// import ContactFormTabs from '../ContactFormTabs';
import ContactFormTabs2 from '../ContactForm2';

interface HeaderProps {
  theme?: string;
  language: string;
  setLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({theme, language, setLanguage}) => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [isFormSidebarVisible, setFormSidebarVisible] = useState(false);
  const [isMobileSidebarVisible, setMobileSidebarVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };


  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const serviceDropDown = {
    heading: language === "en" ? "Services" : "الخدمات",
    headingSrc: "/services",
    image: dropDownServiceImage,
    description:
      language === "en"
        ? "At Sigma6 Digital, we provide a robust selection of services designed to help your business excel in the digital arena."
        : "في سيجما 6 ديجيتال، نقدم مجموعة قوية من الخدمات المصممة لمساعدة عملك على النجاح في المجال الرقمي.",
    categories: [
      {
        heading: language === "en" ? "Development" : "التطوير",
        headingSrc: "/development",
        service: [
          { name: language === "en" ? "Web Development" : "تطوير الويب", src: "/website-development" },
          { name: language === "en" ? "App Development" : "تطوير التطبيقات", src: "/app-development" },
          { name: language === "en" ? "E-commerce Development" : "تطوير التجارة الإلكترونية", src: "/ecommerce-development" },
          { name: language === "en" ? "CRM Development" : "تطوير CRM", src: "/crm-development" },
        ],
      },
      {
        heading: language === "en" ? "IT Solutions" : "حلول تكنولوجيا المعلومات",
        headingSrc: "/it-solutions",
        service: [
          { name: language === "en" ? "Network Management" : "إدارة الشبكات", src: "/network-management" },
          { name: language === "en" ? "Cloud Solutions" : "الحلول السحابية", src: "/cloud-solutions" },
          { name: language === "en" ? "Data Security" : "أمان البيانات", src: "/data-security" },
          { name: language === "en" ? "IT Consulting" : "استشارات تكنولوجيا المعلومات", src: "/it-consulting" },
          { name: language === "en" ? "Virtualization" : "الافتراضية", src: "/virtualization" },
        ],
      },
    ],
  };
  
  const industriesDropDown = {
    heading: language === "en" ? "Industries" : "الصناعات",
    headingSrc: "/industries",
    image: dropDownIndustryeImage,
    description: language === "en"
      ? "We work with a diverse range of industries, providing customized digital solutions."
      : "نعمل مع مجموعة متنوعة من الصناعات، ونوفر حلولًا رقمية مخصصة.",
    categories: [
      { heading: language === "en" ? "Education" : "التعليم", headingSrc: "/education-industry" },
      { heading: language === "en" ? "Legal Services" : "الخدمات القانونية", headingSrc: "/legal-industry" },
      { heading: language === "en" ? "Technology" : "التكنولوجيا", headingSrc: "/technology-industry" },
      { heading: language === "en" ? "Healthcare" : "الرعاية الصحية", headingSrc: "/healthcare-industry" },
      { heading: language === "en" ? "Real Estate" : "العقارات", headingSrc: "/realestate-industry" },
    ],
  };
  // const navLinks = [
  //   { path: "/", labelEn: "Home", labelAr: "الرئيسية" },
  //   { path: "/services", labelEn: "Services", labelAr: "الخدمات" },
  //   { path: "/industries", labelEn: "Industries", labelAr: "الصناعات" },
  //   { path: "/about-us", labelEn: "About", labelAr: "من نحن" },
  //   { path: "/faq", labelEn: "FAQ", labelAr: "الأسئلة الشائعة" },
  //   { path: "/contact", labelEn: "Contact", labelAr: "اتصل بنا" },
  // ];
  
  useEffect(() => {
    if (isFormSidebarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFormSidebarVisible]);
  
  return (
    <header className={`${theme ? styles.themeDark : ''} ${styles.head} ${
        scrollHeader ? styles.scrolled : ''
      } position-fixed `}
    >
      <div className="container">
        <div
          className={`${styles.headerRow} d-flex align-items-center justify-content-between`}
        >
          <div className="d-flex align-items-center gap-5">
            <div className={styles.logoBox}>
              <Link to="/">
              <img
                src={scrollHeader || theme ? darkLogo : lightLogo}
                alt="Sigma 6 Digital Logo"
                className={styles.headerLogo}
                />
              </Link>
            </div>
            <div className={styles.Navbar}>
              <nav className="d-flex justify-content-center align-items-center">
                <ul className="d-flex list-unstyled align-items-center m-0 gap-4 navbar-group">
                  <li className={`py-5 py-sm-4 py-lg-4 ${styles.navList}`}>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.active} ${
                              scrollHeader
                                ? styles.navLinksScrolled
                                : styles.navLinks
                            } text-decoration-none`
                          : `${
                              scrollHeader
                                ? styles.navLinksScrolled
                                : styles.navLinks
                            } text-decoration-none`
                      }
                    >
                      {language === "en" ? "Home" : "الرئيسية"}
                    </NavLink>
                  </li>
                  <li className={`py-5 py-sm-4 py-lg-4 ${styles.navList}`} onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
                    <NavLink
                      to="/services"
                      className={({ isActive }) => isActive? `${styles.active} ${scrollHeader? styles.navLinksScrolled: styles.navLinks} text-decoration-none`
                          : `${
                              scrollHeader
                                ? styles.navLinksScrolled
                                : styles.navLinks
                            } text-decoration-none`
                      }
                      onClick={() => setActiveDropdown(null)}
                    > {language === "en" ? "Services" : "الخدمات"} <TiArrowSortedDown />
                    </NavLink>
                    <div className={`${activeDropdown === 'services' ? styles.openDropdown : ''} ${styles.navDropDownHeaderBox}`}>
                      <NavDropdown navDropDown={serviceDropDown} onLinkClick={handleMouseLeave} />
                    </div>
                  </li>
                  <li className={`py-5 py-sm-4 py-lg-4 ${styles.navList} ${scrollHeader? styles.navLinksScrolled: styles.navLinks}`}  onMouseEnter={() => handleMouseEnter('industries')} onMouseLeave={handleMouseLeave}>
                      <NavLink
                        to="/industries"
                        className={({ isActive }) => isActive? `${styles.active} ${scrollHeader? styles.navLinksScrolled: styles.navLinks} text-decoration-none`
                            : `${
                                scrollHeader
                                  ? styles.navLinksScrolled
                                  : styles.navLinks
                              } text-decoration-none`
                        }
                        onClick={() => setActiveDropdown(null)}
                      >
                      {language === "en" ? "Industries" : "الصناعات"} <TiArrowSortedDown />
                      </NavLink>
                    <div className={`${activeDropdown === 'industries' ? styles.openDropdown : ''} ${styles.navDropDownHeaderBox}`}>
                      <NavDropdown navDropDown={industriesDropDown} onLinkClick={handleMouseLeave} />
                    </div>
                  </li>
                  {/* <li className={`py-5 py-sm-4 py-lg-4 ${styles.navList}`}>
                    <NavLink
                      to="/about-us"
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.active} ${
                              scrollHeader
                                ? styles.navLinksScrolled
                                : styles.navLinks
                            } text-decoration-none`
                          : `${
                              scrollHeader
                                ? styles.navLinksScrolled
                                : styles.navLinks
                            } text-decoration-none`
                      }
                    >
                      {language === "en" ? "About" : "معلومات عنا"}
                    </NavLink>
                  </li> */}
                  <li className={`py-5 py-sm-4 py-lg-4 ${styles.navList}`}>
                    <NavLink
                      to="/faq"
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.active} ${
                              scrollHeader
                                ? styles.navLinksScrolled
                                : styles.navLinks
                            } text-decoration-none`
                          : `${
                              scrollHeader
                                ? styles.navLinksScrolled
                                : styles.navLinks
                            } text-decoration-none`
                      }
                    >
                       {language === "en" ? "FAQ" : "الأسئلة الشائعة"}
                    </NavLink>
                  </li>
                  <li className={`py-5 py-sm-4 py-lg-4 ${styles.navList}`}>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.active} ${
                              scrollHeader
                                ? styles.navLinksScrolled
                                : styles.navLinks
                            } text-decoration-none`
                          : `${
                              scrollHeader
                                ? styles.navLinksScrolled
                                : styles.navLinks
                            } text-decoration-none`
                      }
                    >
                         {language === "en" ? "Contact" : "اتصل بنا"}
                    </NavLink>
                  </li>
                  <li>
                  <button className={`${styles.arabicButton} ${scrollHeader ? styles.arabicButtonScrolled : ''}`} onClick={() => setLanguage(language === "en" ? "ar" : "en")}>
            {language === "en" ? "Arabic" : "إنجليزي"}
          </button>
                  </li>
                </ul>
              </nav>
              
            </div>
          </div>
          <div className={`${styles.contactDetails}`}>
            <div className="d-flex align-items-center gap-4">
              <p
                className={`${
                  scrollHeader ? styles.contactDetailScrolled : styles.contactDetail
                } mb-0`}
              >
                <IoMailSharp /> connect@sigma6digital.com
              </p>
              <button className={`${styles.navContactBtn} ${
                  scrollHeader ? styles.navContactBtnScrolled : ''
                } btn`} onClick={() => setFormSidebarVisible(true)}
              >
                {language === "en" ? "Get In Touch" : "تواصل معنا"}
              </button>
              <div className={`${styles.formSidebar}`} style={{ left: isFormSidebarVisible ? '0%' : '100%' }}>
                <div className="container-fluid h-100">
                  <div className="row h-100">
                    <div className="col-9 h-100 p-0 ms-auto">
                      <div className={`${styles.headerFormBox} d-flex flex-column justify-content-center positon-relative`}>
                        <div className={`${styles.closeHeaderFormBox}`} onClick={() => setFormSidebarVisible(false)}>
                          <RxCross2 />
                        </div>
                        <h3 className={`${styles.headerContactHeading} px-lg-5 d-inline`}><span>{language === "en" ? "Get In Touch" : "تواصل معنا"}</span></h3>
                        <div className={`${styles.headerForm} px-lg-5`}>
                          <ContactFormTabs2 language={language as "en" | "ar"} />

                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.sidebarOption}`}>
            <button
              className={`${scrollHeader ? styles.sidebarBtnScrolled : styles.sidebarBtn} ${styles.sidebarOpenBtn}`} onClick={() => setMobileSidebarVisible(true)}>
              <FaBarsStaggered />
            </button>
            <div className={`${styles.headerMobileSidebar}`}  style={{ left: isMobileSidebarVisible ? '0%' : '-100%' }}>
              <div className="container-fluid p-0 h-100">
                <div className="row h-100">
                  <div className="col-md-5 h-100">
                    <div className={`${styles.navSidebarBox} position-relative`}>
                        <div className={`${styles.sidebarHeader} d-flex justify-content-between align-items-center`}>
                          <img src={darkLogo} alt="Sigma6Digital" className={`${styles.sidebarHeaderLogo}`} />
                          <button className={`${styles.closeNavSidebar} border-0 position-relative`} onClick={() => setMobileSidebarVisible(false)}>
                            <RxCross2 />
                          </button>
                        </div>
                        <div className={`${styles.sidebarBody}`}>
                          <ul className={`list-unstyled ${styles.sidebarBodyUL}`}>
                            <li className={`${styles.sidebarNavList}`}><NavLink to="/" className={({ isActive }) => isActive? `${styles.active} ${styles.sidebarNavLink} text-decoration-none` : `${styles.sidebarNavLink} text-decoration-none`} onClick={() => setMobileSidebarVisible(false)}>Home</NavLink></li>
                            <li className={`${styles.sidebarNavList}`}><NavLink to="/services" className={({ isActive }) => isActive? `${styles.active} ${styles.sidebarNavLink} text-decoration-none` : `${styles.sidebarNavLink} text-decoration-none`} onClick={() => setMobileSidebarVisible(false)}>Services <MdKeyboardArrowRight /></NavLink></li>
                            <li className={`${styles.sidebarNavList}`}>Industries <MdKeyboardArrowRight /></li>
                            {/* <li className={`${styles.sidebarNavList}`}><NavLink to="/about-us" className={({ isActive }) => isActive? `${styles.active} ${styles.sidebarNavLink} text-decoration-none` : `${styles.sidebarNavLink} text-decoration-none`} onClick={() => setMobileSidebarVisible(false)}>About</NavLink></li> */}
                            <li className={`${styles.sidebarNavList}`}><NavLink to="/faq" className={({ isActive }) => isActive? `${styles.active} ${styles.sidebarNavLink} text-decoration-none` : `${styles.sidebarNavLink} text-decoration-none`} onClick={() => setMobileSidebarVisible(false)}>Faq</NavLink></li>
                          </ul>
                        </div>
                        <div className={`${styles.sidebarFooter}`}>
                          <Link to="/contact/" className='text-decoration-none' onClick={() => setMobileSidebarVisible(false)}><button className="btn w-100">Get In Touch</button></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
