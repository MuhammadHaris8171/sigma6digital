import { Link } from "react-router-dom";
import styles from "../styles/SecondaryHeading.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

interface SecondaryHeadingProps {
  heading: string;
  buttonText?: string;
  buttonsrc?: string;
}

function SecondaryHeading({ heading, buttonText, buttonsrc }: SecondaryHeadingProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
        <div className={`d-flex justify-content-between align-items-end ${styles.secondaryHeadingContainer}`}>
          <h2 className={`${styles.secondaryHeading} mb-0`}>{heading}</h2>
          {buttonText && (
            <Link to={buttonsrc || "#"} className={`${styles.mainBtn} text-decoration-none`}>
              {buttonText} <FaLongArrowAltRight />
            </Link>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default SecondaryHeading;
