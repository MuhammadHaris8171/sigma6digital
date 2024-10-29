import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import lightLogo from '../../assets/images/sigma6_white_logo.webp';
import darkLogo from '../../assets/images/sigma6_dark_logo.webp';
import styles from './Header.module.css';
import { IoMailSharp } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';

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

  return (
    <header className={`${styles.head} ${scrollHeader ? styles.scrolled : ''} position-fixed py-5 py-sm-4 py-lg-3`}>
      <div className="container">
        <div className={`${styles.headerRow} d-flex align-items-center justify-content-between`}>
          <div className='d-flex align-items-center gap-5'>
            <div className={styles.logoBox}>
              <img 
                src={scrollHeader ? darkLogo : lightLogo} 
                alt="Sigma 6 Digital Logo" 
                className={styles.headerLogo} 
              />
            </div>
            <div className={styles.Navbar}>
              <nav className='d-flex justify-content-center align-items-center'>
                <ul className='d-flex list-unstyled align-items-center m-0 gap-4 navbar-group'>
                  <li>
                    <NavLink 
                      to="/" 
                      className={({ isActive }) => 
                        isActive ? `${styles.active} ${scrollHeader ? styles.navLinksScrolled : styles.navLinks} text-decoration-none` 
                                 : `${scrollHeader ? styles.navLinksScrolled : styles.navLinks} text-decoration-none`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/about" 
                      className={({ isActive }) => 
                        isActive ? `${styles.active} ${scrollHeader ? styles.navLinksScrolled : styles.navLinks} text-decoration-none` 
                                 : `${scrollHeader ? styles.navLinksScrolled : styles.navLinks} text-decoration-none`
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/services" 
                      className={({ isActive }) => 
                        isActive ? `${styles.active} ${scrollHeader ? styles.navLinksScrolled : styles.navLinks} text-decoration-none` 
                                 : `${scrollHeader ? styles.navLinksScrolled : styles.navLinks} text-decoration-none`
                      }
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/faq" 
                      className={({ isActive }) => 
                        isActive ? `${styles.active} ${scrollHeader ? styles.navLinksScrolled : styles.navLinks} text-decoration-none` 
                                 : `${scrollHeader ? styles.navLinksScrolled : styles.navLinks} text-decoration-none`
                      }
                    >
                      Faq
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/contact" 
                      className={({ isActive }) => 
                        isActive ? `${styles.active} ${scrollHeader ? styles.navLinksScrolled : styles.navLinks} text-decoration-none` 
                                 : `${scrollHeader ? styles.navLinksScrolled : styles.navLinks} text-decoration-none`
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
            <p className={`${scrollHeader ? styles.contactDetailScrolled : styles.contactDetail} mb-0`}>
              <IoMailSharp /> connect@sigma6digital.com
            </p>
            <button className={`${styles.navContactBtn} ${scrollHeader ? styles.navContactBtnScrolled : ''} btn`}>
              Get In Touch
            </button>
            </div>
          </div>
          <div className={`${styles.sidebarOption}`}>
            <button className={`${scrollHeader ? styles.sidebarBtnScrolled : styles.sidebarBtn}`}><FaBarsStaggered /></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
