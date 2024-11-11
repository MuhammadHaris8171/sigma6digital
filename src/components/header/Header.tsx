import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import lightLogo from '../../assets/images/sigma6_white_logo.webp';
import darkLogo from '../../assets/images/sigma6_dark_logo.webp';
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
    image: "/src/assets/images/360x185.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe iure, minima earum adipisci sed error labore consequuntur maxime doloribus, alias libero.",
    categories: [
      {
        heading: "Development",
        service: [
          { name: "Web Development", src: "#" },
          { name: "App Development", src: "#" },
          { name: "E-commerce Development", src: "#" },
          { name: "CRM Development", src: "#" },
        ],
      },
      {
        heading: "IT Solutions",
        service: [
          { name: "Network Management", src: "#" },
          { name: "Cloud Solutions", src: "#" },
          { name: "Data Security", src: "#" },
          { name: "IT Consulting", src: "#" },
          { name: "Virtualization", src: "#" },
        ],
      },
      {
        heading: "AI & Automation",
        service: [
          { name: "Machine Learning Models", src: "#" },
          { name: "Chatbot Development", src: "#" },
          { name: "Predictive Analytics", src: "#" },
          { name: "Computer Vision", src: "#" },
          { name: "NLP Solutions", src: "#" },
        ],
      },
      {
        heading: "Maintenance & Support",
        service: [
          { name: "Software Maintenance", src: "#" },
          { name: "Bug Fixing", src: "#" },
          { name: "Security Patching", src: "#" },
          { name: "Performance Optimization", src: "#" },
          { name: "Data Backup & Recovery", src: "#" },
        ],
      },
      {
        heading: "Digital Marketing",
        service: [
          { name: "SEO Optimization", src: "#" },
          { name: "Social Media Marketing", src: "#" },
          { name: "Content Creation", src: "#" },
          { name: "PPC Campaigns", src: "#" },
          { name: "Email Marketing", src: "#" },
        ],
      },
      {
        heading: "Creative Design",
        service: [
          { name: "Graphic Design", src: "#" },
          { name: "Logo & Branding", src: "#" },
          { name: "UI/UX Design", src: "#" },
          { name: "Motion Graphics", src: "#" },
          { name: "Product Design", src: "#" },
        ],
      },
    ],
  };
  const industriesDropDown = {
    heading: "Industries",
    image: "/src/assets/images/360x185.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe iure, minima earum adipisci sed error labore consequuntur maxime doloribus, alias libero.",
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
                  <li className={`py-5 py-sm-4 py-lg-4 ${styles.navList}`}>
                    <NavLink
                      to="/services"
                      className={({ isActive }) => isActive? `${styles.active} ${scrollHeader? styles.navLinksScrolled: styles.navLinks} text-decoration-none`
                          : `${
                              scrollHeader
                                ? styles.navLinksScrolled
                                : styles.navLinks
                            } text-decoration-none`
                      }
                    >
                      Services <TiArrowSortedDown />
                    </NavLink>
                    <div className={`${styles.navDropDownHeaderBox}`}>
                      <NavDropdown navDropDown={serviceDropDown} />
                    </div>
                  </li>
                  <li className={`py-5 py-sm-4 py-lg-4 ${styles.navList} ${scrollHeader? styles.navLinksScrolled: styles.navLinks}`}>
                      Industries <TiArrowSortedDown />
                    <div className={`${styles.navDropDownHeaderBox}`}>
                      <NavDropdown navDropDown={industriesDropDown} />
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
