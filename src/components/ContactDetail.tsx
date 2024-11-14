import styles from '../styles/ContactDetail.module.css';
import ContactForm from './ContactForm';

interface ContactDetailProps {
  heading: string;
  description: string;
  contactBox: { heading: string; description: string }[]; 
}

function ContactDetail({ heading, description, contactBox }: ContactDetailProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 pe-5">
          <h3 className={styles.contactMainHeading}>{heading}</h3>
          <p className={styles.contactMainPara}>{description}</p>
          <div className="row pt-4">
            {contactBox.map((item, index) => (
              <div className="col-md-6 pb-4 pb-md-0" key={index}>
                <div className={`${styles.contactBox}`}>
                  <h4 className={`${styles.contactBoxHeading}`}>{item.heading}</h4>
                  <p className={`${styles.contactBoxDescription} mb-0`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
