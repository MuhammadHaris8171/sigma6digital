import styles from '../styles/ContactDetail.module.css'
import ContactForm from './ContactForm';

interface ContactDetailProps {
  heading: string;
  description: string;
}

function ContactDetail({ heading, description }: ContactDetailProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 pe-5">
          <h3 className={`${styles.contactMainHeading}`}>{heading}</h3>
          <p className={`${styles.contactMainPara}`}>{description}</p>
        </div>
        <div className="col-md-7">
            <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
