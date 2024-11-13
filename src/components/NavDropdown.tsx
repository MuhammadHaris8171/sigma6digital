import { Link } from 'react-router-dom';
import styles from '../styles/NavDropdown.module.css';
import { FaArrowRightLong } from 'react-icons/fa6';

interface Service {
  name: string;
  src: string;
}

interface Category {
  heading: string;
  service?: Service[];
}

interface ServiceDropDownProps {
  heading?: string; 
  description?: string;
  image?: string;
  categories?: Category[];
}

interface NavDropdownProps {
  navDropDown: ServiceDropDownProps;
  onLinkClick: () => void;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ navDropDown, onLinkClick  }) => {
  return (
    <div className={`${styles.navHoverDropdown}`}>
      <div className="container">
        <div className="row">
          {(navDropDown.heading || navDropDown.image || navDropDown.description) && (
            <div className="col-md-4">
              <div className={`${styles.navImageBox}`}>
                {navDropDown.heading && (
                  <h3 className={`${styles.navDropdownMainHeading}`}>
                    {navDropDown.heading}
                  </h3>
                )}
                {navDropDown.image && (
                  <img
                    className={`${styles.navDropdownMainImg}`}
                    src={navDropDown.image}
                    alt="Dropdown Image"
                  />
                )}
                {navDropDown.description && (
                  <p className={`${styles.navDropdownMainDescription}`}>
                    {navDropDown.description}
                  </p>
                )}
              </div>
            </div>
          )}
          {navDropDown.categories && (
            <div className={`col-md-8 ${styles.navDropdownCol}`}>
              <div className="row">
                {navDropDown.categories.map((category, index) => (
                  <div className="col-6" key={index}>
                    <div className={`${styles.navCategoryBox}`}>
                      {category.heading && (
                        <h4 className={`${styles.navCategoryHeading}`}>
                          {category.heading}
                        </h4>
                      )}
                      {category.service && (
                        <ul className={`${styles.navCategoryListContainer} d-flex flex-column mb-4 list-unstyled`}>
                          {category.service.map((service, idx) => (
                            <li className={`${styles.navCategoryList}`} key={idx}>
                              <Link
                                to={service.src}
                                className={`${styles.navCategoryListLink} text-decoration-none`}
                                 onClick={onLinkClick}
                              >
                                {service.name} <FaArrowRightLong />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
