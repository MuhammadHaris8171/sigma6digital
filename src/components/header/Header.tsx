import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import lightLogo from '../../assets/images/sigma6_white_logo.webp';
import darkLogo from '../../assets/images/sigma6_dark_logo.webp';
import dropDownServiceImage from '../../assets/images/360x185.webp';
import styles from './Header.module.css';
import { IoMailSharp } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';
import NavDropdown from '../NavDropdown';
import ContactForm from '../ContactForm';
import { RxCross2 } from 'react-icons/rx';
import { TiArrowSortedDown } from 'react-icons/ti';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface HeaderProps {
  theme?: string;
}

const Header: React.FC<HeaderProps> = ({theme}) => {
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
    heading: "Services",
    headingSrc: "/services",
    image: dropDownServiceImage,
    description:
      "At Sigma6 Digital, we provide a robust selection of services designed to help your business excel in the digital arena. Our expert team is dedicated to delivering high-quality solutions that cater to your specific needs. Explore our core services below.",
    categories: [
      {
        heading: "Development",
        headingSrc: "/development",
        service: [
          { name: "Web Development", src: "/website-development" },
          { name: "App Development", src: "/app-development" },
          { name: "E-commerce Development", src: "/ecommerce-development" },
          { name: "CRM Development", src: "/crm-development" },
        ],
      },
      {
        heading: "IT Solutions",
        headingSrc: "/it-solutions",
        service: [
          { name: "Network Management", src: "/network-management" },
          { name: "Cloud Solutions", src: "/cloud-solutions" },
          { name: "Data Security", src: "/data-security" },
          { name: "IT Consulting", src: "/it-consulting" },
          { name: "Virtualization", src: "/virtualization" },
        ],
      },
      {
        heading: "AI & Automation",
        headingSrc: "/ai-automation",
        service: [
          { name: "Machine Learning Models", src: "/machine-learning" },
          { name: "Chatbot Development", src: "/chatbot-development" },
          { name: "Predictive Analytics", src: "/predicitve-analytics" },
          { name: "Computer Vision", src: "/computer-vision" },
          { name: "NLP Solutions", src: "/nlp-solutions" },
        ],
      },
      {
        heading: "Maintenance & Support",
        headingSrc: "/maintenance-support",
        service: [
          { name: "Software Maintenance", src: "/software-maintenance" },
          { name: "Bug Fixing", src: "/bug-fixing" },
          { name: "Security Patching", src: "/security-patching" },
          { name: "Performance Optimization", src: "/performance-optimization" },
          { name: "Data Backup & Recovery", src: "/data-backup" },
        ],
      },
      {
        heading: "Digital Marketing",
        headingSrc: "/digital-marketing",
        service: [
          { name: "SEO Optimization", src: "/seo-optimization" },
          { name: "Social Media Marketing", src: "/social-media-marketing" },
          { name: "Content Creation", src: "/content-creation" },
          { name: "PPC Campaigns", src: "/ppc-campaigns" },
          { name: "Email Marketing", src: "/email-marketing" },
        ],
      },
      {
        heading: "Creative Design",
        headingSrc: "/creative-design",
        service: [
          { name: "Graphic Design", src: "/graphic-design" },
          { name: "Logo & Branding", src: "/logo-and-branding" },
          { name: "UI/UX Design", src: "/ui-ux-design" },
          { name: "Motion Graphics", src: "/motion-graphics" },
          { name: "Product Design", src: "/product-design" },
        ],
      },
    ],
  };
  const industriesDropDown = {
    heading: "Industries",
    headingSrc: "/industries",
    image: dropDownServiceImage,
    description: "We work with a diverse range of industries, providing customised digital solutions that address each sector’s unique challenges. Whether you’re in education, legal services, technology, healthcare, or real estate, our expert team is dedicated to delivering impactful results that drive growth, streamline operations, and enhance customer engagement.",
    categories: [
      {
        heading: "Education",
      },
      {
        heading: "Legal Services",
      },
      {
        heading: "Technology"
      },
      {
        heading: "Healthcare",
      },
      {
        heading: "Real Estate",
      },
    ],
  };

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
                      Home
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
                    > Services <TiArrowSortedDown />
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
                      Industries <TiArrowSortedDown />
                      </NavLink>
                    <div className={`${activeDropdown === 'industries' ? styles.openDropdown : ''} ${styles.navDropDownHeaderBox}`}>
                      <NavDropdown navDropDown={industriesDropDown} onLinkClick={handleMouseLeave} />
                    </div>
                  </li>
                  <li className={`py-5 py-sm-4 py-lg-4 ${styles.navList}`}>
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
                      About
                    </NavLink>
                  </li>
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
                      Faq
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
                      Contact
                    </NavLink>
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
                Get In Touch
              </button>
              <div className={`${styles.formSidebar}`} style={{ left: isFormSidebarVisible ? '0%' : '100%' }}>
                <div className="container-fluid h-100">
                  <div className="row h-100">
                    <div className="col-5 h-100 p-0 ms-auto">
                      <div className={`${styles.headerFormBox} d-flex flex-column justify-content-center positon-relative`}>
                        <div className={`${styles.closeHeaderFormBox}`} onClick={() => setFormSidebarVisible(false)}>
                          <RxCross2 />
                        </div>
                        <h3 className={`${styles.headerContactHeading} px-lg-5 d-inline`}><span>Get In Touch</span></h3>
                        <div className={`${styles.headerForm} pe-lg-5`}>
                          <ContactForm />
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
                            <li className={`${styles.sidebarNavList}`}><NavLink to="/about-us" className={({ isActive }) => isActive? `${styles.active} ${styles.sidebarNavLink} text-decoration-none` : `${styles.sidebarNavLink} text-decoration-none`} onClick={() => setMobileSidebarVisible(false)}>About</NavLink></li>
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
