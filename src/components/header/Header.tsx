import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import lightLogo from '../../assets/images/sigma6_white_logo.webp';
import darkLogo from '../../assets/images/sigma6_dark_logo.webp';
import styles from './Header.module.css';
import { IoMailSharp } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';
import NavDropdown from '../NavDropdown';

const Header: React.FC = () => {
  const [scrollHeader, setScrollHeader] = useState(false);

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
    <header
      className={`${styles.head} ${
        scrollHeader ? styles.scrolled : ''
      } position-fixed`}
    >
      <div className="container">
        <div
          className={`${styles.headerRow} d-flex align-items-center justify-content-between`}
        >
          <div className="d-flex align-items-center gap-5">
            <div className={styles.logoBox}>
              <img
                src={scrollHeader ? darkLogo : lightLogo}
                alt="Sigma 6 Digital Logo"
                className={styles.headerLogo}
              />
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
                      Services
                    </NavLink>
                    <div className={`${styles.navDropDownHeaderBox}`}>
                      <NavDropdown navDropDown={serviceDropDown} />
                    </div>
                  </li>
                  <li className={`py-5 py-sm-4 py-lg-4 ${styles.navList} ${scrollHeader? styles.navLinksScrolled: styles.navLinks}`}>
                    {/* <NavLink
                      to="/#Industries"
                      className={({ isActive }) => isActive? `${styles.active}  text-decoration-none`
                          : `${
                              scrollHeader
                                ? styles.navLinksScrolled
                                : styles.navLinks
                            } text-decoration-none`
                      }
                    > */}
                      Industries
                    {/* </NavLink> */}
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
              <button
                className={`${styles.navContactBtn} ${
                  scrollHeader ? styles.navContactBtnScrolled : ''
                } btn`}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className={`${styles.sidebarOption}`}>
            <button
              className={`${scrollHeader ? styles.sidebarBtnScrolled : styles.sidebarBtn}`}
            >
              <FaBarsStaggered />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
